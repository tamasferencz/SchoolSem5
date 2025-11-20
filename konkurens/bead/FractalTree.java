import javax.swing.*;
import java.awt.*;
import java.util.concurrent.ArrayBlockingQueue;
import java.util.concurrent.BlockingQueue;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.atomic.AtomicInteger;

public class FractalTree extends Canvas {
    /* Variables with class-wide visibility */
    private static boolean slowMode;
    private static ExecutorService executorService;

    private static final BlockingQueue<Line> drawQueue = new ArrayBlockingQueue<>(10000);

    private static final AtomicInteger activeTasks = new AtomicInteger(0);
    private static final Object lock = new Object();

    /* Recursive function for calculating all drawcalls for the fractal tree */
    public void makeFractalTree(int x, int y, int angle, int height) {

        if (slowMode) {
            try {
                Thread.sleep(100);
            } catch (InterruptedException ie) {
                Thread.currentThread().interrupt();
                return;
            }
        }

        if (height == 0)
            return;

        int x2 = x + (int) (Math.cos(Math.toRadians(angle)) * height * 8);
        int y2 = y + (int) (Math.sin(Math.toRadians(angle)) * height * 8);
        Color color = (height < 5) ? Color.GREEN : Color.BLACK;
        try {
            drawQueue.put(new Line(x, y, x2, y2, color));
        } catch (InterruptedException ie) {
            Thread.currentThread().interrupt();
            return;
        }

        final int finalX2 = x2;
        final int finalY2 = y2;
        final int finalHeight = height - 1;
        activeTasks.incrementAndGet();
        executorService.submit(() -> {
            try {
                makeFractalTree(finalX2, finalY2, angle - 20, finalHeight);
            } finally {
                taskFinished();
            }
        });

        makeFractalTree(x2, y2, angle + 20, height - 1);
    }

    private static void taskFinished() {
        synchronized (lock) {
            int remaining = activeTasks.decrementAndGet();
            if (remaining == 0) {
                lock.notifyAll();
            }
        }
    }

    /* Code for EDT */
    /* Must only contain swing code (draw things on the screen) */
    /* Must not contain calculations (do not use math and compute libraries here) */
    /*
     * No need to understand swing, a simple endless loop that draws lines is enough
     */
    @Override
    public void paint(Graphics g) {
        while (true) {
            try {
                Line line = drawQueue.take();
                g.setColor(line.color);
                g.drawLine(line.x1, line.y1, line.x2, line.y2);
            } catch (InterruptedException ie) {
                ie.printStackTrace();
                Thread.currentThread().interrupt();
                break;
            }
        }
    }

    /* Code for main thread */
    public static void main(String args[]) {

        /* Parse args */
        slowMode = args.length != 0 && Boolean.parseBoolean(args[0]);

        slowMode = true;

        executorService = Executors.newFixedThreadPool(128);

        /* Initialize graphical elements and EDT */
        FractalTree tree = new FractalTree();
        JFrame frame = new JFrame();
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(800, 600);
        frame.add(tree);
        frame.setVisible(true);

        activeTasks.incrementAndGet();
        tree.makeFractalTree(390, 480, -90, 10);
        synchronized (lock) {
            while (activeTasks.get() > 0) {
                try {
                    lock.wait();
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                }
            }
        }
        executorService.shutdown();

        /* Log success as last step */
        System.out.println("Main has finished");
    }

    private static class Line {
        int x1, y1, x2, y2;
        Color color;

        public Line(int x1, int y1, int x2, int y2, Color color) {
            this.x1 = x1;
            this.y1 = y1;
            this.x2 = x2;
            this.y2 = y2;
            this.color = color;
        }
    }
}

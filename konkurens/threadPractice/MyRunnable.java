package threadPractice;

import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.TimeUnit;

public class MyRunnable implements Runnable {
    private final int timeoutSeconds;

    public MyRunnable(int timeoutSeconds) {
        this.timeoutSeconds = timeoutSeconds;
    }

    @Override
    public void run() {
        final Thread self = Thread.currentThread();

        ScheduledExecutorService scheduler = Executors.newSingleThreadScheduledExecutor(r -> {
            Thread t = new Thread(r);
            t.setDaemon(true);
            return t;
        });

        ScheduledFuture<?> timeoutHandle = scheduler.schedule(() -> {
            System.out.println("Time is up! (from MyRunnable)");
            self.interrupt();
        }, timeoutSeconds, TimeUnit.SECONDS);

        try {
            while (!self.isInterrupted()) {
                System.out.println("Thread is running");
                Thread.sleep(1000);
            }
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        } finally {
            timeoutHandle.cancel(false);
            scheduler.shutdownNow();
        }

        System.out.println("MyRunnable stopped.");
    }
}

package threadPractice;

import java.util.Scanner;
import java.util.concurrent.Callable;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.TimeoutException;

public class threadPractice {
    public static void main(String[] args) throws Exception {

        final int timeoutSeconds = 10;

        Thread worker = new Thread(new MyRunnable(timeoutSeconds));
        worker.setDaemon(true);
        worker.start();

        var readerExec = Executors.newSingleThreadExecutor(r -> {
            Thread t = new Thread(r);
            t.setDaemon(true);
            return t;
        });

        Callable<String> readTask = () -> {
            try (Scanner sc = new Scanner(System.in)) {
                System.out.print("Enter your name: ");
                return sc.nextLine();
            }
        };

        Future<String> future = readerExec.submit(readTask);
        String name = null;

        try {
            name = future.get(timeoutSeconds, TimeUnit.SECONDS);
        } catch (TimeoutException e) {
            System.out.println("Time is up!");
            worker.interrupt();
        } finally {
            future.cancel(true);
            readerExec.shutdownNow();
        }

        if (name != null) {
            System.out.println("Hello, " + name + "! Welcome to the threading practice.");
            worker.interrupt();
            worker.join();
        }
    }
}

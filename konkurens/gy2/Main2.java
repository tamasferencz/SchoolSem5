package gy2;

public class Main2 {
    public static void main(String[] args) {

        Runnable r = () -> {
            for (int i = 0; i < 1000; ++i) {
                if (i % 2 != 0) {
                    System.out.print("hello ");
                } else {
                    try {
                        Thread.sleep(5);
                    } catch (InterruptedException e) {
                        System.out.println("t1 was interrupted");
                        return;
                    }
                }

            }
        };

        Thread t1 = new Thread(r);
        t1.start();

        try {
            Thread.sleep(1000);
            t1.interrupt();
            t1.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        // t1.start(); - Exception in thread "main"
        // java.lang.IllegalThreadStateException

        System.out.println("\nkész");
    }
}
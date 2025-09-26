package gy2;

public class Main {
    public static void main(String[] args) {

        Thread t1 = new Thread(() -> {
            for (int i = 0; i < 1000; ++i) {
                System.out.print("hello ");
                try {
                    Thread.sleep(5);
                } catch (Exception e) {
                    System.out.println("t1 was interrupted");
                    return;
                }
            }
        });

        t1.start();

        try {
            Thread.sleep(1000);
            t1.interrupt();
            // t1.join();
        } catch (InterruptedException e) {

        }
        t1.start();
    }
}

package gy3;

import java.util.concurrent.ConcurrentLinkedQueue;
import java.util.Queue;

public class SimpleThreadList {

    public static void main(String[] args) throws InterruptedException {
        Queue<Integer> queue = new ConcurrentLinkedQueue<>();

        Thread oddThread = new Thread(() -> {
            for (int i = 1; i <= 1_000_000; i += 2) {
                queue.add(i);
            }
        });

        Thread evenThread = new Thread(() -> {
            for (int i = 2; i <= 1_000_000; i += 2) {
                queue.add(i);
            }
        });

        Thread fiveThread = new Thread(() -> {
            for (int i = 5; i <= 1_000_000; i += 5) {
                queue.add(i);
            }
        });

        oddThread.start();
        evenThread.start();
        fiveThread.start();

        oddThread.join();
        evenThread.join();
        fiveThread.join();
        // Print all numbers in the queue
        for (Integer num : queue) {
            System.out.println(num);
        }
    }
}

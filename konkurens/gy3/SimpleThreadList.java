package gy3;

import java.util.ArrayList;
import java.util.List;

public class SimpleThreadList {

    public static void main(String[] args) throws InterruptedException {
        List<Integer> list = new ArrayList<>();

        Thread oddThread = new Thread(() -> {
            for (int i = 1; i <= 1_000_000; i += 2) {
                synchronized (list) {
                    list.add(i);
                }
            }
        });

        Thread evenThread = new Thread(() -> {
            for (int i = 2; i <= 1_000_000; i += 2) {
                synchronized (list) {
                    list.add(i);
                }
            }
        });

        oddThread.start();
        evenThread.start();

        oddThread.join();
        evenThread.join();
    }
}

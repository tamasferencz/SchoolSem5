import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;

public class Simulation {

    public static void main(String[] args) {
        PettingZoo zoo = new PettingZoo();

        Thread zooThread = new Thread(zoo);
        zooThread.start();

        ExecutorService executor = Executors.newFixedThreadPool(300);

        for (int i = 0; i < 1000; i++) {
            executor.submit(new Guest(zoo));
        }

        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        zoo.close();

        try {
            executor.shutdown();
            executor.awaitTermination(Long.MAX_VALUE, TimeUnit.MILLISECONDS);
            zooThread.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        System.out.println("Simulation has finished.");
    }
}
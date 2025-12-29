import java.util.concurrent.ThreadLocalRandom;

public class Guest implements Runnable {

    private PettingZoo zoo;

    public Guest(PettingZoo zoo) {
        this.zoo = zoo;
    }

    @Override
    public void run() {
        zoo.enter(this);
        try {
            long timeInside = ThreadLocalRandom.current().nextLong(100, 121);
            Thread.sleep(timeInside);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        zoo.exit(this);
    }
}
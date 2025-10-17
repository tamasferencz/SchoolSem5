public class Philosophers {
    private static final int NUMBER_OF_PHILOSOPHERS = 5;
    private static final int THINK_TIME = 100;
    private static final int EAT_TIME = 50;

    private static Object[] forks = new Object[NUMBER_OF_PHILOSOPHERS];
    static {
        for (int i = 0; i < NUMBER_OF_PHILOSOPHERS; ++i) {
            forks[i] = new Object();
        }
    }

    private static class Philosopher extends Thread {
        private int id;

        Philosopher(int id) {
            this.id = id;
        }

        @Override
        public void run() {
            while (true) {
                think();
                eat();
            }
        }

        private void think() {
            System.err.println("#" + id + " Thinking...");
            try {
                Thread.sleep(THINK_TIME);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }

        private void eat() {
            // --- EREDETI KÓD (holtpontot okozhat) ---
            // System.err.println("#" + id + " Taking left fork.");
            // synchronized (forks[id]) {
            // System.err.println("#" + id + " Taking right fork.");
            // synchronized (forks[(id + 1) % NUMBER_OF_PHILOSOPHERS]) {
            // System.err.println("#" + id + " Eating...");
            // try {
            // Thread.sleep(EAT_TIME);
            // } catch (InterruptedException e) {
            // e.printStackTrace();
            // }
            // }
            // }

            // --- JAVÍTOTT VÁLTOZAT ---
            // A filozófus mindig előbb az alacsonyabb sorszámú villát veszi fel,
            // utána a nagyobb sorszámút → nincs körkörös várakozás → nincs holtpont.
            int left = id;
            int right = (id + 1) % NUMBER_OF_PHILOSOPHERS;

            // új: határozzuk meg a kisebb és nagyobb indexű villát
            int first = Math.min(left, right);
            int second = Math.max(left, right);

            System.err.println("#" + id + " wants forks " + first + " and " + second);

            synchronized (forks[first]) { // előbb a kisebb indexű villa
                System.err.println("#" + id + " picked up fork " + first);
                synchronized (forks[second]) { // utána a nagyobb indexű villa
                    System.err.println("#" + id + " picked up fork " + second + " and starts eating...");
                    try {
                        Thread.sleep(EAT_TIME);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                }
            }

            System.err.println("#" + id + " finished eating and put down forks.");
        }
    }

    public static void main(String[] args) {
        Philosopher[] philosophers = new Philosopher[NUMBER_OF_PHILOSOPHERS];

        for (int i = 0; i < NUMBER_OF_PHILOSOPHERS; ++i) {
            philosophers[i] = new Philosopher(i);
            philosophers[i].start();
        }
    }
}

import java.util.ArrayList;
import java.util.List;

public class Doctor implements Runnable {

    private PettingZoo zoo;
    private List<Animal> patients = new ArrayList<>();

    public Doctor(PettingZoo zoo) {
        this.zoo = zoo;
    }

    public synchronized void addSickAnimal(Animal animal) {
        patients.add(animal);
        this.notify();
    }

    private void cure() {
        try {
            Thread.sleep(100);
            System.out.println("Doktor: Meggyógyítottam egy állatot.");
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    @Override
    public void run() {
        while (zoo.isOpen() || !patients.isEmpty()) {

            Animal currentPatient = null;

            synchronized (this) {
                if (!patients.isEmpty()) {
                    currentPatient = patients.remove(0);
                }
            }

            if (currentPatient != null) {
                cure();
                currentPatient.cured();
            } else {
                if (zoo.isOpen()) {
                    synchronized (this) {
                        try {
                            wait(1000);
                        } catch (InterruptedException e) {
                            e.printStackTrace();
                        }
                    }
                }
            }
        }
        System.out.println("Doktor: Végeztem mára.");
    }
}
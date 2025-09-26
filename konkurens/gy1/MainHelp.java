
package gy1;

public class MainHelp {
    public static void main(String[] args) {
        // Első szál: számolás
        Thread t1 = new Thread(() -> {
            for (int i = 1; i <= 5; i++) {
                System.out.println("Számolás: " + i);
                try {
                    Thread.sleep(500);
                } catch (InterruptedException e) {
                }
            }
        });

        // Második szál: betűk kiírása
        Thread t2 = new Thread(() -> {
            for (char c = 'A'; c <= 'E'; c++) {
                System.out.println("Betű: " + c);
                try {
                    Thread.sleep(500);
                } catch (InterruptedException e) {
                }
            }
        });

        // Szálak indítása
        t1.start();
        t2.start();

        System.out.println(">>> Főprogram fut tovább...");
    }
}
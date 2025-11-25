# Solucions UF5- Funcions

#### Exercicis - Nivell bàsic

### 🧠 Exercici 1

a) Escriu una funció que retorne la suma dels valors d'un vector d'enters.  
## 📦 Codi Java

```java
public static int suma(int[] v) {
    int s = 0;
    for(int x : v){
        s += x;
    }
    return s;
}

```
b) Escriu una funció que retorne la mitjana dels valors d'un vector d'enters.  
## 📦 Codi Java

```java
public static double mitjana(int[] v) {
    return (double)suma(v) / v.length;
}

```

c) Escriu una funció que retorne el valor màxim d'un vector d'enters.  
## 📦 Codi Java

```java
public static int maxim(int[] v) {
    int max = v[0];
    for(int x : v){
        if(x > max){
            max = x;
        }
    }
    return max;
}

```
d) Escriu un programa que cree un vector amb N valors enters (generats de forma aleatòria) i mostre la suma, la mitjana i el màxim.

## 📦 Codi Java

```java
import java.util.Arrays;
import java.util.Random;
import java.util.Scanner;

public class App {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Introdueix N: ");
        int N = sc.nextInt();

        int[] vec = new int[N];
        Random r = new Random();

        for (int i = 0; i < N; i++) {
            vec[i] = r.nextInt(101); // 0..100
        }

        System.out.println("Vector generat:");
        System.out.println(Arrays.toString(vec));

        System.out.println("Suma = " + suma(vec));
        System.out.println("Mitjana = " + mitjana(vec));
        System.out.println("Màxim = " + maxim(vec));
    }

    public static int suma(int[] v) {
        int s = 0;
        for (int x : v)
            s += x;
        return s;
    }

    public static double mitjana(int[] v) {
        return suma(v) / v.length;
    }

    public static int maxim(int[] v) {
        int max = v[0];
        for (int x : v) {
            if (x > max) {
                max = x;
            }
        }
        return max;
    }
}
```


### 🧠 Exercici 2

a) Escriu una funció que retorne quantes vocals conté una cadena de text.  

## 📦 Codi Java

```java
    public static int comptaVocals(String s) {
        int count = 0;
        s = s.toLowerCase();
        for (char c : s.toCharArray()) {
            if ("aeiou".indexOf(c) != -1) {
                count++;
            }
        }
        return count;
    }
```

b) Escriu una funció que retorne quants espais conté una cadena de text.  

## 📦 Codi Java

```java
    public static int comptaEspais(String s) {
        int count = 0;
        for (char c : s.toCharArray()) {
            if (c == ' ') {
                count++;
            }
        }
        return count;
    }
```

c) Escriu una funció que retorne quantes consonants conté una cadena de text.  

## 📦 Codi Java

```java
    public static int comptaConsonants(String s) {
        int count = 0;
        s = s.toLowerCase();
        for (char c : s.toCharArray()) {
            if (Character.isLetter(c) && "aeiou".indexOf(c) == -1) {
                count++;
            }
        }
        return count;
    }
```

d) Escriu un programa que llig una frase per teclat i mostre el nombre de vocals, el nombre d'espais i el nombre consonants.

## 📦 Codi Java

```java
import java.util.Scanner;

public class App {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Introdueix una frase: ");
        String frase = sc.nextLine();

        System.out.println("Vocals: " + comptaVocals(frase));
        System.out.println("Espais: " + comptaEspais(frase));
        System.out.println("Consonants: " + comptaConsonants(frase));

    }

    public static int comptaVocals(String s) {
        int count = 0;
        s = s.toLowerCase();
        for (char c : s.toCharArray()) {
            if ("aeiou".indexOf(c) != -1) {
                count++;
            }
        }
        return count;
    }

    public static int comptaEspais(String s) {
        int count = 0;
        for (char c : s.toCharArray()) {
            if (c == ' ') {
                count++;
            }
        }
        return count;
    }

    public static int comptaConsonants(String s) {
        int count = 0;
        s = s.toLowerCase();
        for (char c : s.toCharArray()) {
            if (Character.isLetter(c) && "aeiou".indexOf(c) == -1) {
                count++;
            }
        }
        return count;
    }

}

```

### 🧠 Exercici 3

a) Escriu una funció que rebrà una cadena i retornarà la contrària (inversa).  

## 📦 Codi Java

```java
    public static String inversa(String s) {
        String rev = "";
        for (int i = s.length() - 1; i >= 0; i--) {
            rev += s.charAt(i);
        }
        return rev;
    }
```
b) Escriu una funció que rebrà dos cadenes i retornarà true o false en funció de si són iguals o no.  

## 📦 Codi Java

```java

    public static boolean iguals(String a, String b) {
        return a.equals(b);
    }
```
c) Escriu un programa que demana per teclat una paraula i mostre si és palíndrom usant les funcions anteriors.

## 📦 Codi Java

```java
import java.util.Scanner;

public class App {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Introdueix una paraula: ");
        String p = sc.nextLine();

        String rev = inversa(p);

        if (iguals(p, rev))
            System.out.println("És palíndrom");
        else
            System.out.println("No és palíndrom");
    }

    public static String inversa(String s) {
        String rev = "";
        for (int i = s.length() - 1; i >= 0; i--) {
            rev += s.charAt(i);
        }
        return rev;
    }

    public static boolean iguals(String a, String b) {
        return a.equals(b);
    }

}

```


#### Exercicis - Nivell mitjà

### 🧠 Exercici 4

a) Escriu una funció que mostre un menú amb les opcions: sumar, restar, multiplicar, dividir i acabar el programa.  
b) Escriu una funcució que retorne la suma de dos nombres rebuts per paràmetres.  
c) Escriu una funció que retorne la resta de dos nombres rebuts per paràmetres.  
d) Escriu una funció que retorne la multiplicació de dos nombres rebuts per paràmetres.  
e) Escriu una funció que retorne la divisió de dos nombres rebuts per paràmetres (tenint en compte la divisió per zero).  
f) Escriu un programa que demane dos nombres, mostre el menú i permeta triar una opció. Ho farà fins que l'usuari seleccione l'opció d'eixir del programa.


## 📦 Codi Java

```java
import java.util.Scanner;

public class App {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Introdueix el primer número: ");
        double a = sc.nextDouble();

        System.out.print("Introdueix el segon número: ");
        double b = sc.nextDouble();

        int opcio;

        do {
            menu();
            opcio = sc.nextInt();

            switch (opcio) {
                case 1:
                    System.out.println("Resultat = " + suma(a, b));
                    break;
                case 2:
                    System.out.println("Resultat = " + resta(a, b));
                    break;
                case 3:
                    System.out.println("Resultat = " + multiplicar(a, b));
                    break;
                case 4:
                    System.out.println("Resultat = " + dividir(a, b));
                    break;
                case 5:
                    System.out.println("Adéu!");
                    break;
                default:
                    System.out.println("Opció incorrecta.");
            }

            System.out.println();

        } while (opcio != 5);

    }

    public static void menu() {
        System.out.println("------ MENÚ ------");
        System.out.println("1. Sumar");
        System.out.println("2. Restar");
        System.out.println("3. Multiplicar");
        System.out.println("4. Dividir");
        System.out.println("5. Acabar");
        System.out.print("Tria una opció: ");
    }

    public static double suma(double a, double b) {
        return a + b;
    }

    public static double resta(double a, double b) {
        return a - b;
    }

    public static double multiplicar(double a, double b) {
        return a * b;
    }

    public static double dividir(double a, double b) {
        if (b == 0) {
            System.out.println("Error: no es pot dividir per zero.");
            return 0;
        }
        return a / b;
    }

}

```

### 🧠 Exercici 5

Dissenya un sistema que permeta afegir un estudiant, marcar la seva assistència i mostrar l'estat d'assistència de tots els estudiants. Quan l'usuari vulga afegir un estudiant, el programa demanarà el nom i l'incorporarà a la llista de persones matriculades només si no hi és ja, assignant-li automàticament l'estat de no assistit; si el nom ja existeix, no fa cap canvi. Quan l'usuari tria marcar assistència, el sistema demana el nom de l'estudiant i, si el troba a la llista, canvia el seu estat al de assistit, i si no existeix, informa que no es pot marcar l'assistència d'un estudiant desconegut. Quan l'usuari demana veure els assistents, el programa mostrarà tots els noms i si han assistit o no. Finalment, l'usuari podrà finalitzar quan vulga l'execució del programa.

## 🛠️ Solució proposada

### a) Afegir estudiant
- Crear una estructura `HashMap<String, Boolean>` anomenada `estudiants`.
- Demanar a l’usuari el nom amb `Scanner`.
- Convertir el nom a minúscules per evitar duplicats.
- Comprovar si ja existeix la clau amb `estudiants.containsKey(nom)`.
  - Si **ja existeix**, mostrar missatge d’avís i no modificar res.
  - Si **no existeix**, afegir-la al mapa amb el valor `false` (no assistit).

---

### b) Marcar assistència
- Demanar a l’usuari el nom amb `Scanner`.
- Convertir el nom a minúscules.
- Comprovar si la clau existeix en `estudiants`:
  - Si **existeix** → canviar el valor a `true` amb `estudiants.put(nom,true)`.
  - Si **no existeix** → mostrar missatge indicant que no es pot marcar l’assistència.

---

### c) Mostrar estat d’assistència
- Recorre totes les claus del `HashMap` amb `for(String nom : estudiants.keySet())`
- Per a cada estudiant:
  - Obtenir el valor amb `estudiants.get(nom)`
  - Mostrar:
    - el nom
    - i el text `"ASSISTIT"` o `"NO ASSISTIT"` segons el valor booleà.

---

### d) Menú principal
- Crear un bucle `do … while`
- Mostrar el menú d’opcions:
  1. Afegir estudiant  
  2. Marcar assistència  
  3. Mostrar estat  
  4. Eixir  
- Llegir l’opció amb `Scanner`
- Executar l’acció corresponent amb un `switch`
- Repetir fins que l’usuari trie l’opció **4**


## 📦 Codi Java

```java
import java.util.HashMap;
import java.util.Scanner;

public class App {
    public static Scanner sc = new Scanner(System.in);

    public static void main(String[] args) {

        HashMap<String, Boolean> estudiants = new HashMap<>();

        int op;

        do {
            menu();
            op = Integer.parseInt(sc.nextLine());

            switch (op) {

                case 1:
                    afegirEstudiant(estudiants);
                    break;
                case 2:
                    marcarAssistencia(estudiants);
                    break;
                case 3:
                    mostrarEstats(estudiants);
                    break;
                case 4:
                    System.out.println("Adéu!");
                    break;
                default:
                    System.out.println("Opció incorrecta!");
            }

            System.out.println();

        } while (op != 4);
    }

    public static void menu() {
        System.out.println("----- MENÚ -----");
        System.out.println("1. Afegir estudiant");
        System.out.println("2. Marcar assistència");
        System.out.println("3. Mostrar estat d'assistència");
        System.out.println("4. Eixir");
        System.out.print("Opció: ");
    }

    public static void afegirEstudiant(HashMap<String, Boolean> mapa) {
        System.out.print("Nom de l'estudiant: ");
        String nom = sc.nextLine();

        if (mapa.containsKey(nom.toLowerCase())) {
            System.out.println("ERROR: L'estudiant ja existeix.");
        } else {
            mapa.put(nom.toLowerCase(), false); // false = no assistit
            System.out.println("Estudiant afegit com a NO ASSISTIT.");
        }
    }

    public static void marcarAssistencia(HashMap<String, Boolean> mapa) {
        System.out.print("Nom de l'estudiant per marcar assistència: ");
        String nom = sc.nextLine().toLowerCase();

        if (mapa.containsKey(nom)) {
            mapa.put(nom, true);
            System.out.println("Assistència marcada!");
        } else {
            System.out.println("ERROR: estudiant NO trobat.");
        }
    }

    public static void mostrarEstats(HashMap<String, Boolean> mapa) {
        if (mapa.isEmpty()) {
            System.out.println("No hi ha estudiants registrats.");
            return;
        }

        System.out.println("----- LLISTA -----");
        for (String nom : mapa.keySet()) {
            boolean estat = mapa.get(nom);
            System.out.println(nom + " -> " + (estat ? "ASSISTIT" : "NO ASSISTIT"));
        }
    }
}

```

### 🧠 Exercici 6

Un sistema de gestió acadèmica permet registrar alumnes amb el seu nom i les notes de les cinc assignatures. A partir d'aquest registre, qualsevol vegada que l'usuari ho sol·licite, el programa mostrarà el llistat d'alumnes amb mitjana de notes superior a 9. També ofereix la possibilitat de determinar quin alumne presenta la variabilitat de notes més gran, és a dir, amb major diferència entre la seva nota més alta i la més baixa.

## 🛠️ Solució proposada

### a) Registrar alumnes
- Crear un `HashMap<String, double[]>` per guardar:
  - clau → nom de l’alumne
  - valor → vector amb les cinc notes
- Quan l’usuari seleccione l’opció de registrar:
  - Demanar el nom
  - Crear un vector `double[5]`
  - Demanar les 5 notes
  - Guardar-ho al mapa amb `mapa.put(nom, notes)`

---

### b) Mostrar alumnes amb mitjana superior a 9
- Recorre totes les entrades del mapa amb `for (Entry<String,double[]> ...)`
- Calcula la suma de les notes i després la mitjana (*suma / 5*)
- Si la mitjana és > 9, mostrar el nom i la mitjana
- Si cap alumne compleix la condició, mostrar missatge indicant-ho

---

### c) Determinar alumne amb major variabilitat
- Recorre totes les entrades del mapa
- Per a cada alumne:
  - Busca la seua nota mínima
  - Busca la seua nota màxima
  - Calcula `max - min`
- Guardar el nom de l’alumne amb la diferència més gran
- Mostrar-lo com a resultat final

---

### d) Menú principal
- Mostrar les opcions:
  1. Registrar alumne  
  2. Mostrar alumnes amb mitjana > 9  
  3. Alumne amb major variabilitat  
  4. Eixir
- Llegir l’opció amb `Scanner`
- Executar el mètode corresponent amb `switch`
- Repetir fins que l’opció siga **4**



## 📦 Codi Java

```java
import java.util.HashMap;
import java.util.Scanner;

public class App {

    public static void main(String[] args) {
         Scanner sc = new Scanner(System.in);

        HashMap<String, double[]> alumnes = new HashMap<>();

        int op;

        do{
            menu();
            op = Integer.parseInt(sc.nextLine());

            switch(op){

                case 1: registrar(alumnes, sc); break;

                case 2: mostraraMitjana(alumnes); break;

                case 3: alumneMaxVariabilitat(alumnes); break;

                case 4: System.out.println("Adéu!"); break;

                default: System.out.println("Opció incorrecta.");
            }

        }while(op != 4);
    }

    }

    public static void menu() {
        System.out.println("\n--- MENÚ ---");
        System.out.println("1. Registrar alumne");
        System.out.println("2. Mostrar alumnes amb mitjana > 9");
        System.out.println("3. Mostrar alumne amb major variabilitat");
        System.out.println("4. Eixir");
        System.out.print("Opció: ");
    }

    public static void registrar(HashMap<String, double[]> mapa, Scanner sc) {
        System.out.print("Nom alumne: ");
        String nom = sc.nextLine().toLowerCase();

        double[] notes = new double[5];

        for (int i = 0; i < 5; i++) {
            System.out.print("Nota " + (i + 1) + ": ");
            notes[i] = sc.nextDouble();
        }
        sc.nextLine();

        mapa.put(nom, notes);

        System.out.println("Alumne registrat correctament.");
    }

    public static void mostraraMitjana(HashMap<String, double[]> mapa) {

        boolean trobat = false;
        for (HashMap.Entry<String, double[]> registre : mapa.entrySet()) {
            String nom = registre.getKey();
            double[] notes = registre.getValue();

            double suma = 0;

            for (double x : notes)
                suma += x;

            double mitjana = suma / 5;

            if (mitjana > 9) {
                System.out.println(nom + " -> " + mitjana);
                trobat = true;
            }
        }

        if (!trobat)
            System.out.println("No hi ha alumnes amb mitjana > 9.");
    }

    public static void alumneMaxVariabilitat(HashMap<String, double[]> mapa) {

        String millor = "";
        double maxDif = -1;

        for (HashMap.Entry<String, double[]> registre : mapa.entrySet()) {
            String nom = registre.getKey();
            double[] notes = registre.getValue();

            double min = 10;
            double max = 0;

            for (double x : notes) {
                if (x < min)
                    min = x;
                if (x > max)
                    max = x;
            }

            double dif = max - min;

            if (dif > maxDif) {
                maxDif = dif;
                millor = nom;
            }
        }

        System.out.println("Major variabilitat: " + millor + " (" + maxDif + ")");
    }
}

```

#### Exercicis - Recursivitat

### 🧠🧠 Exercici R1

Estàs desenvolupant un gestor de salut per a mascotes. Cada animal té una fitxa on s'indica, any rere any, les revisions mèdiques anuals. Cada fitxa, per tant, es composa de dos valors: l'edat de l'animal (anirà des de 0 fins a l'actual) i un enter que indica la quantitat de revisions que es va fer amb eixa edat.

a) Implementa una funcionalitat que, a partir d'una llista de revisions de l'animal, permeta comptar quantes revisions se li han realitzat en total.  
b) Implementa una funcionalitat que, a partir d'eixa mateixa llista, retorne un llistat amb totes les edats en què es feren més d'una revisió.  
c) Determina l'edat en què l'animal va tindre més revisions. En cas d'empat, pots tornar la menor edat.  
d) Comprova si existeix alguna edat en què no es va fer cap revisió.  
e) Genera una cadena de text que mostre totes les edats i el nombre de revisions fetes en cadascuna.

## 🛠️ Solució proposada

###  a) Inicialitzar amb valors aleatoris
- Crear una estructura `ArrayList<int[]>` anomenada `revisions`.
- Cada element serà un array de dos enters:  
  - **[edat, nombreRevisions]**
- Generar dades per a edats de **0 fins a N** (per exemple, N = 10).
- Assignar a cada edat un nombre de revisions aleatori entre **0 i 3** amb `rand.nextInt(4)`.

---

### b) Comptar totes les revisions
- Definir una funció `comptarRevisions(revisions, index)`:
  - **Cas base**: si `index == revisions.size()`, tornar `0`.
  - **Recursió**: sumar `revisions.get(index)[1]` amb la crida recursiva per a `index + 1`.

---

###  c) Edats amb més d’una revisió
- Definir `edatsMesDuna(revisions, index)`:
  - **Cas base**: si `index == revisions.size()`, tornar cadena buida.
  - Si `revisions.get(index)[1] > 1`, afegir l’edat a la cadena.
  - Concatenar amb la resta de la recursió.

---

###  d) Edat amb més revisions
- Definir `edatMesRevisions(revisions, index)`:
  - **Cas base**: si és l’últim element, tornar la seua edat.
  - Comparar revisions actuals amb les del següent:
    - Si té més revisions, o empat però menor edat, tornar l’actual.
    - Si no, tornar la millor edat trobada.

---

###  e) Comprovar si hi ha alguna edat amb 0 revisions
- Definir `existeixSenseRevisio(revisions, index)`:
  - **Cas base**: si `index == revisions.size()`, tornar `false`.
  - Si `revisions.get(index)[1] == 0`, tornar `true`.
  - Si no, continuar recursivament.

---

###  f) Generar cadena amb totes les edats i revisions
- Definir `generarCadena(revisions, index)`:
  - **Cas base**: si `index == revisions.size()`, tornar cadena buida.
  - Construir la part actual: `"Edat X: Y revisió(s)"`.
  - Concatenar amb la resta.


## 📦 Codi Java

```java

import java.util.*;

public class App {
    public static void main(String[] args) {
        // Creem una llista on cada element és un array de dos enters:
        // [edat, nombre de revisions]
        ArrayList<int[]> revisions = new ArrayList<>();

        // Afegim les dades (edat i revisions)
        revisions.add(new int[] { 0, 1 }); // Edat 0 → 1 revisió
        revisions.add(new int[] { 1, 0 }); // Edat 1 → 0 revisions
        revisions.add(new int[] { 2, 2 }); // Edat 2 → 2 revisions
        revisions.add(new int[] { 3, 1 }); // Edat 3 → 1 revisió

        // Cridem a cada funcionalitat i mostrem el resultat
        System.out.println("a) Total revisions: " + comptarRevisions(revisions, 0));
        System.out.println("b) Edats amb més d'una revisió: " + edatsMesDuna(revisions, 0));
        System.out.println("c) Edat amb més revisions: " + edatMesRevisions(revisions, 0));
        System.out.println("d) Hi ha alguna edat sense revisió? " + existeixSenseRevisio(revisions, 0));
        System.out.println("e) Cadena: " + generarCadena(revisions, 0));
    }

    // b) Comptar totes les revisions de forma recursiva
    public static int comptarRevisions(ArrayList<int[]> revisions, int index) {
        // Cas base: si hem arribat al final de la llista, tornem 0
        if (index == revisions.size())
            return 0;

        // Agafem el nombre de revisions en la posició actual (índex)
        int actual = revisions.get(index)[1];

        // Sumem el valor actual amb el resultat de la resta (crida recursiva)
        return actual + comptarRevisions(revisions, index + 1);
    }

    // c) Llistar les edats amb més d'una revisió
    public static String edatsMesDuna(ArrayList<int[]> revisions, int index) {
        if (index == revisiones.size())
        return "";
        
        int[] elem = revisiones.get(index);
        
        if (elem[1] > 1)
            return elem[0] + edatMasUna(revisiones, index+1);
        else 
            return edatMasUna(revisiones, index+1); 

    }

    // d) Trobar l'edat amb més revisions (menor edat en cas d'empat)
    public static int edatMesRevisions(ArrayList<int[]> revisions, int index) {
        // Cas base: si és l'últim element, tornem la seua edat
        if (index == revisions.size() - 1)
            return revisions.get(index)[0];

        // Cridem recursivament per a la resta
        int millorEdat = edatMesRevisions(revisions, index + 1);

        // Compare revisions actuals amb les del següent
        int actualRev = revisions.get(index)[1];
        int millorRev = revisions.get(index + 1)[1];

        // Si l'actual té més revisions, o empat però menor edat, la triem
        if (actualRev > millorRev || (actualRev == millorRev && revisions.get(index)[0] < millorEdat)) {
            return revisions.get(index)[0];
        }
        return millorEdat;
    }

    // e) Comprovar si hi ha alguna edat amb 0 revisions
    public static boolean existeixSenseRevisio(ArrayList<int[]> revisions, int index) {
        // Cas base: si hem arribat al final, tornem false
        if (index == revisions.size())
            return false;

        // Si trobem una edat amb 0 revisions, tornem true
        if (revisions.get(index)[1] == 0)
            return true;

        // Si no, seguim buscant
        return existeixSenseRevisio(revisions, index + 1);
    }

    // f) Generar una cadena amb totes les edats i revisions
    public static String generarCadena(ArrayList<int[]> revisions, int index) {
        // Cas base: si hem arribat al final, tornem cadena buida
        if (index == revisions.size())
            return "";

        // Agafem l'element actual
        int[] r = revisions.get(index);
        String part = "Edat " + r[0] + ": " + r[1] + " revisió" + (r[1] != 1 ? "s" : "");

        // Cridem recursivament per a la resta
        String resta = generarCadena(revisions, index + 1);

        // Unim la part actual amb la resta
        return part + (resta.isEmpty() ? "" : ", " + resta);
    }
}

```

### 🧠🧠 Exercici R2

a) Funció recursiva que torne una cadena sense duplicats mantenint l'ordre.  
b) Funció que retorne llistat de lletres repetides.  
c) Funció recursiva que comprove si hi ha dos caràcters consecutius iguals.  
d) Funció recursiva que compte quants dígits conté una contrasenya.  
e) Funció recursiva que torne la contrasenya invertida.

## 🛠️ Solució proposada


## 📦 Codi Java

```java
```

### 🧠🧠 Exercici R3

Una empresa té una estructura organitzativa on cada empleat pot tindre subordinats, i estos subordinats poden tindre al seu torn més persones al seu càrrec.

Cal crear un sistema que permeta calcular quantes persones estan sota la supervisió directa i indirecta d'un gerent específic. Per exemple, si Joan és gerent de Maria i Pere, i Maria supervisa Anna i Carles, aleshores Joan supervisa indirectament un total de 4 persones.

::: tip NOTA
L'estructura organitzativa dels empleats s'emmagatzema en una estructura clau-valor, on loa clau és el nom d'un empleat i el valor és el llistat d'empleats al seu càrrec.
:::

## 🛠️ Solució proposada


## 📦 Codi Java

```java
```

### 🧠🧠 Exercici R4

Estàs desenvolupant un explorador de fitxers per a una aplicació d'escriptori. Els usuaris poden navegar per carpetes que contenen fitxers i altres carpetes, les quals al seu torn poden contindre més fitxers i carpetes.

Implementa una funcionalitat que permeta buscar un fitxer específic pel nom en tot el sistema de carpetes. El programa ha de revisar la carpeta actual, després entrar en cada subcarpeta i buscar-hi, i així successivament fins a trobar el fitxer o determinar que no existeix.

## 🛠️ Solució proposada


## 📦 Codi Java

```java
```

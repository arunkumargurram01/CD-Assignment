import java.util.*;
import java.io.*;

public class RomanToNumber{
    public static void main(String args[]){
        Scanner obj = new Scanner(System.in);

        System.out.println("Enter Roman Number : ");
        String roman = obj.nextLine();

        int result = RomanToNumber.convert(roman.toUpperCase());
        System.out.println("Value of Roamn "+roman.toUpperCase()+" Is : "+result);

    }

    public static int convert(String roman){
        System.out.println("Method called");
        HashMap<String ,Integer> map = new HashMap<>();
        map.put("I",1);
        map.put("II",2);
        map.put("III",3);
        map.put("IV",4);
        map.put("V",5);
        map.put("VI",6);
        map.put("VII",7);
        map.put("VIII",8);
        map.put("IX",9);
        map.put("X",10);

        int value = map.get(roman);

        return value;
    }

}
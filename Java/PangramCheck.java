import java.util.*;

public class PangramCheck{
    public static void main(String args[]){
        String str = "126879abcdefghijklmnopq@hihoi879800#rstuvwxyz";
        String mulchar = str.toLowerCase().replace(" ","");

        String result = pangram(mulchar);
        System.out.println(result);


    }

    public static String pangram(String str){
        String alphabets = "abcdefghijklmnopqrstuvwxyz";
        
        Set<Character> set1 = new HashSet<>();
        for(int i=0; i<alphabets.length(); i++){
            set1.add(alphabets.charAt(i));
        }
         
        Set<Character> set2 = new HashSet<>();
        for(int i=0; i<str.length(); i++){
            set2.add(str.charAt(i));
        }

        
        Set<Character> commonSet = new HashSet<>(set1);
        commonSet.retainAll(set2);

        System.out.println(commonSet);

        if(commonSet.size() != 26)
             return "Not Pangram";
        else     
             return "Pangram";
    }
}
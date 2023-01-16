namespace Lab_11_1.Services
{
    public class DataService
    {
       
        public string Title = "AccessServiceDirectly";
        public int getFirstNumber() { 
             Random rnd = new Random();
            return rnd.Next(0, 10); 
        }
        public int getSecondNumber()
        {
        Random rnd = new Random();
        return rnd.Next(0, 10);
        }


    }
}

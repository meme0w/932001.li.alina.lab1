using System.ComponentModel.DataAnnotations;

namespace Lab_11_3.ViewModel
{
    public class QuizData
    {
        public int answer { get; set; }
        public string question { get; set; }
        public int questionsAmmount { get; set; }  
        public int rightAnswers { get; set; }
        public List<string> answers { get; set; } = new List<string>();

        public string NewQuestion()
        {
            Random rnd = new Random();
            var x1 = rnd.Next(0, 100);
            var x2 = rnd.Next(0, 100);
            var y = rnd.Next(0, 2);
            var Operator = "+";
            switch (y)
            {
                case 0:
                    Operator = "+";
                    answer = x1 + x2;
                    break;
                case 1:
                    Operator = "-";
                    answer = x1 - x2;
                    break;
            }
            return x1 + " " + Operator + " " + x2 + " = ";
        }

        public void checkResult(int userAnswer)
        {
            questionsAmmount++;
            if(userAnswer == answer)
            {
                rightAnswers++;
            }
            answers.Add(question+userAnswer.ToString());
        }

    }
}

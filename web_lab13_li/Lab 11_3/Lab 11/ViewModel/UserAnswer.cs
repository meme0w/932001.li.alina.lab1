using System.ComponentModel.DataAnnotations;
using System.Xml.Linq;

namespace Lab_11.ViewModel
{
    public class UserAnswer : ValidationAttribute
    {
        [Required]
        public int userAnswer { get; set; }

        public override bool IsValid(object value)
        {
            if (value!= null && Convert.ToInt32(value) > -200)
                return true;

            return false;
        }
    }
}

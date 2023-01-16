using Lab_11_1.ViewModel;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace Lab_11_1.Controllers
{
    public class CalcServiceController : Controller
    {
        public IActionResult PassUsingModel()
        {   
            Random rnd= new Random();
            var data = new Data()
            {   
                Title = "PassUsingModel",
                FirstNumber = rnd.Next(0, 10),
                SecondNumber = rnd.Next(0, 10)
            };
            return View(data);
        }

        public IActionResult PassUsingViewData()
        {
            Random rnd = new Random();
            ViewData["Data"] = new Data()
            {
                Title = "PassUsingViewData",
                FirstNumber = rnd.Next(0, 10),
                SecondNumber = rnd.Next(0, 10)
            };

            return View();
        }

        public IActionResult PassUsingViewBag()
        {
            Random rnd = new Random();
            ViewBag.Data = new Data()
            {
                Title = "PassUsingViewBag",
                FirstNumber = rnd.Next(0, 10),
                SecondNumber = rnd.Next(0, 10)
            };

            return View();
        }

        public IActionResult AccessServiceDirectly()
        {
            return View();
        }
    }
}

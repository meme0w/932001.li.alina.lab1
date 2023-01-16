using Lab11_2.ViewModel;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using System.Net;

namespace Lab11_2.Controllers
{
    public class CalcController : Controller
    {
        public IActionResult Manual()
        {
            ViewData["Title"] = "Manual";
            if (Request.Method == "POST")
            {
                var data = new Data()
                {
                    FirstNumber = Int32.Parse(HttpContext.Request.Form["FirstNumber"]),
                    Operation = HttpContext.Request.Form["Operation"],
                    SecondNumber = Int32.Parse(HttpContext.Request.Form["SecondNumber"]),
                };
                return View("ResultManual",data);
            }
            return View();
        }

        [HttpGet]
        [ActionName("ManualWithSeparateHandlers")]
        public IActionResult ManualWithSeparateHandlersGetMethod()
        {
            ViewData["Title"] = "ManualWithSeparateHandlers";

            return View();
        }
        [HttpPost]
        [ActionName("ManualWithSeparateHandlers")]
        public IActionResult ManualWithSeparateHandlersPostMethod()
        {
            var data = new Data()
            {
                FirstNumber = Int32.Parse(HttpContext.Request.Form["FirstNumber"]),
                Operation = HttpContext.Request.Form["Operation"],
                SecondNumber = Int32.Parse(HttpContext.Request.Form["SecondNumber"]),
            };
            return View("ResultManual",data);
        }

        [HttpGet]
        public IActionResult ModelBindingInParameters()
        {
            var operations = new List<SelectListItem>()
            {
                 new SelectListItem {Text = "+", Value = "+"},
                 new SelectListItem {Text = "-", Value = "-"},
                 new SelectListItem {Text = "*", Value = "*"},
                 new SelectListItem {Text = "/", Value = "/"}
            };
            ViewBag.Operations = operations;
            ViewData["Title"] = "ModelBindingInParameters";
            return View();
        }
        [HttpPost]
        public IActionResult ModelBindingInParameters(int FirstNumber, string Operation, int SecondNumber)
        {
            ViewBag.FirstNumber = FirstNumber;
            ViewBag.SecondNumber = SecondNumber;
            ViewBag.Operation = Operation;
            return View("ResultModelBinding");
        }

        [HttpGet]
        public IActionResult ModelBindingInSeparateModel()
        {

            var operations = new List<SelectListItem>()
            {
                 new SelectListItem {Text = "+", Value = "+"},
                 new SelectListItem {Text = "-", Value = "-"},
                 new SelectListItem {Text = "*", Value = "*"},
                 new SelectListItem {Text = "/", Value = "/"}
            };
            ViewBag.Operations = operations;
            ViewData["Title"] = "ModelBindingInSeparateModel";
            return View();
        }
        [HttpPost]
        public IActionResult ModelBindingInSeparateModel(Data data)
        {
            ViewBag.FirstNumber = data.FirstNumber;
            ViewBag.SecondNumber = data.SecondNumber;
            ViewBag.Operation = data.Operation;
            return View("ResultModelBinding");
        }
    }
}

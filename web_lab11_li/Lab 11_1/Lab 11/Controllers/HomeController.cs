using Microsoft.AspNetCore.Mvc;

namespace Lab_11_1.Controllers
{
    public class HomeController : Controller
    {

        public IActionResult Index()
        {
            return View();
        }
    }
}

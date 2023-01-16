using Microsoft.AspNetCore.Mvc;

namespace Lab11_2.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}

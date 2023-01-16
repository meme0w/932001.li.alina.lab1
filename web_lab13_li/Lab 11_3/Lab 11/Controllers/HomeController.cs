using Microsoft.AspNetCore.Mvc;

namespace Lab11_3.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}

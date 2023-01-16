using Lab_11.ViewModel;
using Lab_11_3.ViewModel;
using Microsoft.AspNetCore.Mvc;
using System;

namespace Lab_11_3.Controllers
{
    public class MockupsController : Controller
    {
        static readonly QuizData data = new QuizData();
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Quiz()
        {
            data.rightAnswers = 0;
            data.questionsAmmount = 0;
            data.answers = new List<string>();
            data.question = data.NewQuestion();
            ViewBag.Task = data.question;
            return View();
        }
        [HttpPost]
        public IActionResult NewQuestion(UserAnswer answer)
        {
            if (ModelState.IsValid)
            {
                data.checkResult(answer.userAnswer);
                data.question = data.NewQuestion();
                ViewBag.Task = data.question;
                return View("Quiz");
            }
            else
            {
                return Content("Вы не ввели свой ответ");
            }
        }



        [HttpPost]
        public IActionResult QuizResult(UserAnswer answer)
        {
            data.checkResult(answer.userAnswer);
            ViewBag.RightAnswers = data.rightAnswers;
            ViewBag.Answers = data.answers;
            ViewBag.QuestionsAmmount = data.questionsAmmount;
            return View();
        }
    }
}

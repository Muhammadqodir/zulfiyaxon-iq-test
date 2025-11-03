import { Question } from './types';

interface Translations {
  [key: string]: {
    startScreen: {
      title: string;
      description: string;
      questionsLabel: string;
      timeLabel: string;
      instructions: string;
      startButton: string;
      creator: string;
    };
    testView: {
      questionLabel: string;
    };
    resultsScreen: {
      title: string;
      feedback: {
        amazing: string;
        good: string;
        niceTry: string;
      };
      scoreLabel: string;
      iqLabel: string;
      iqDisclaimer: string;
      reviewLabels: {
        yourAnswer: string;
        noAnswer: string;
        correctAnswer: string;
      };
      restartButton: string;
      creator: string;
    },
    questions: Question[]
  }
}

export const translations: Translations = {
  uz: {
    startScreen: {
      title: "9-sinf uchun IQ Test",
      description: "Mantiqiy, matematik va verbal qobiliyatlaringizni sinab ko'ring.",
      questionsLabel: "Savollar soni:",
      timeLabel: "Bajarish vaqti:",
      instructions: "Tez va aniq javob berishga harakat qiling. Omad!",
      startButton: "Testni boshlash",
      creator: "Tuzuvchi: Qodirova Zulfiyaxon"
    },
    testView: {
      questionLabel: "savol"
    },
    resultsScreen: {
      title: "Test yakunlandi!",
      feedback: {
        amazing: "Ajoyib natija!",
        good: "Yaxshi natija!",
        niceTry: "Yaxshi harakat!",
      },
      scoreLabel: "Sizning natijangiz:",
      iqLabel: "Taxminiy IQ:",
      iqDisclaimer: "(*Bu taxminiy qiymat bo'lib, haqiqiy IQ o'lchovi hisoblanmaydi)",
      reviewLabels: {
        yourAnswer: "Sizning javobingiz:",
        noAnswer: "Javob berilmagan",
        correctAnswer: "To'g'ri javob:",
      },
      restartButton: "Qayta urinib ko'rish",
      creator: "Tuzuvchi: Qodirova Zulfiyaxon"
    },
    questions: [
      { question: "Ushbu qatorda mantiqan keyingi son qaysi? 4, 6, 9, 13, ...", options: ["18", "17", "16", "19"], correctAnswer: 0, category: 'Mantiq' },
      { question: "Beysbol tayoqchasi va to'p birgalikda 1100 so'm turadi. Tayoqcha to'pdan 1000 so'm qimmatroq. To'p qancha turadi?", options: ["100 so'm", "50 so'm", "1000 so'm", "150 so'm"], correctAnswer: 1, category: 'Matematika' },
      { question: "Kitob o'qish uchun bo'lsa, sanchqi ... uchun.", options: ["Chizish", "Yozish", "Yeyish", "Kuylash"], correctAnswer: 2, category: 'Verbal' },
      { question: "Agar 3x3x3 o'lchamdagi kubning tashqi tomoni bo'yalsa va keyin u 1x1x1 o'lchamdagi kichik kubiklarga bo'linsa, nechta kichik kubikning faqat bitta tomoni bo'yalgan bo'ladi?", options: ["6", "8", "12", "27"], correctAnswer: 0, category: 'Fazoviy' },
      { question: "Qaysi so'z ortiqcha?", options: ["Uy", "Iglo", "Bungalo", "Ofis"], correctAnswer: 3, category: 'Verbal' },
      { question: "Avtomobil bir soatda 60 km masofani bosib o'tadi. U 10 daqiqada qancha masofani bosib o'tadi?", options: ["6 km", "10 km", "12 km", "15 km"], correctAnswer: 1, category: 'Matematika' },
      { question: "Agar 'CIFAIPC' harflarini qayta tartiblasangiz, siz ... nomini olasiz:", options: ["Shahar", "Hayvon", "Okean", "Mamlakat"], correctAnswer: 2, category: 'Verbal' },
      { question: "13 dan keyingi tub son qaysi?", options: ["14", "15", "16", "17"], correctAnswer: 3, category: 'Matematika' },
      { question: "Agar siz kvadrat qog'ozni yarmidan buklasangiz, keyin yana yarmidan buklasangiz va markazidan teshik ochsangiz, ochganingizda nechta teshik bo'ladi?", options: ["1", "2", "3", "4"], correctAnswer: 3, category: 'Fazoviy' },
      { question: "Tushib qolgan sonni toping: 8, 27, 64, 125, ?", options: ["196", "216", "225", "256"], correctAnswer: 1, category: 'Mantiq' },
      { question: "Bir fermerning 17 ta qo'yi bor edi. 9 tasidan tashqari hammasi o'ldi. Nechta qo'y qoldi?", options: ["8", "17", "9", "0"], correctAnswer: 2, category: 'Mantiq' },
      { question: "Berilgan naqshni buklash orqali qaysi shaklni yasash mumkin?", options: ["Piramida", "Kub", "Silindr", "Sfera"], correctAnswer: 1, category: 'Fazoviy' },
      { question: "Shifokorning idorasida 4 ta xona bor. Agar shifokor har bir bemorga 15 daqiqa vaqt sarflasa, 2 soat ichida nechta bemorni ko'rishi mumkin?", options: ["4", "6", "8", "16"], correctAnswer: 2, category: 'Matematika' },
      { question: "Qaysi so'z o'xshashlikni to'ldiradi: Barmoq qo'l uchun bo'lsa, oyoq barmog'i ... uchun?", options: ["Oyoq", "Oyoq kafti", "Qo'l", "Tirnoq"], correctAnswer: 1, category: 'Verbal' },
      { question: "Agar barcha Ziplar Zap bo'lsa va barcha Zaplar Zop bo'lsa, barcha Ziplar Zop bo'ladimi?", options: ["Ha", "Yo'q", "Balki", "Aniqlab bo'lmaydi"], correctAnswer: 0, category: 'Mantiq' }
    ],
  },
  ru: {
    startScreen: {
      title: "IQ Тест для 9-го класса",
      description: "Проверьте свои логические, математические и вербальные способности.",
      questionsLabel: "Количество вопросов:",
      timeLabel: "Время на выполнение:",
      instructions: "Старайтесь отвечать быстро и точно. Удачи!",
      startButton: "Начать тест",
      creator: "Разработчик: Кадырова Зульфияхон"
    },
    testView: {
      questionLabel: "вопрос"
    },
    resultsScreen: {
      title: "Тест завершен!",
      feedback: {
        amazing: "Отличный результат!",
        good: "Хороший результат!",
        niceTry: "Неплохая попытка!",
      },
      scoreLabel: "Ваш результат:",
      iqLabel: "Приблизительный IQ:",
      iqDisclaimer: "(*Это приблизительное значение и не является настоящим измерением IQ)",
      reviewLabels: {
        yourAnswer: "Ваш ответ:",
        noAnswer: "Нет ответа",
        correctAnswer: "Правильный ответ:",
      },
      restartButton: "Попробовать снова",
      creator: "Разработчик: Кадырова Зульфияхон"
    },
    questions: [
      { question: "Какое число логически следует в этом ряду? 4, 6, 9, 13, ...", options: ["18", "17", "16", "19"], correctAnswer: 0, category: 'Логика' },
      { question: "Бейсбольная бита и мяч вместе стоят 1100 сум. Бита стоит на 1000 сум дороже мяча. Сколько стоит мяч?", options: ["100 сум", "50 сум", "1000 сум", "150 сум"], correctAnswer: 1, category: 'Математика' },
      { question: "Книга для чтения, как вилка для...", options: ["Рисования", "Письма", "Еды", "Пения"], correctAnswer: 2, category: 'Вербальный' },
      { question: "Если покрасить внешнюю сторону куба 3x3x3, а затем разделить его на маленькие кубики 1x1x1, у скольких кубиков будет окрашена только одна сторона?", options: ["6", "8", "12", "27"], correctAnswer: 0, category: 'Пространственный' },
      { question: "Какое слово лишнее?", options: ["Дом", "Иглу", "Бунгало", "Офис"], correctAnswer: 3, category: 'Вербальный' },
      { question: "Автомобиль проезжает 60 км за час. Какое расстояние он проедет за 10 минут?", options: ["6 км", "10 км", "12 км", "15 км"], correctAnswer: 1, category: 'Математика' },
      { question: "Если переставить буквы 'CIFAIPC', вы получите название...", options: ["Города", "Животного", "Океана", "Страны"], correctAnswer: 2, category: 'Вербальный' }, // PACIFIC
      { question: "Какое простое число идет после 13?", options: ["14", "15", "16", "17"], correctAnswer: 3, category: 'Математика' },
      { question: "Если сложить квадратный лист бумаги пополам, затем еще раз пополам и проделать отверстие в центре, сколько отверстий будет, когда вы его развернете?", options: ["1", "2", "3", "4"], correctAnswer: 3, category: 'Пространственный' },
      { question: "Найдите пропущенное число: 8, 27, 64, 125, ?", options: ["196", "216", "225", "256"], correctAnswer: 1, category: 'Логика' }, // 2^3, 3^3..
      { question: "У фермера было 17 овец. Все, кроме 9, умерли. Сколько овец осталось?", options: ["8", "17", "9", "0"], correctAnswer: 2, category: 'Логика' },
      { question: "Какую фигуру можно сделать, сложив данный узор?", options: ["Пирамида", "Куб", "Цилиндр", "Сфера"], correctAnswer: 1, category: 'Пространственный' },
      { question: "В кабинете врача 4 комнаты. Если врач тратит 15 минут на каждого пациента, сколько пациентов он может принять за 2 часа?", options: ["4", "6", "8", "16"], correctAnswer: 2, category: 'Математика' }, // 120/15=8
      { question: "Какое слово завершает аналогию: Палец относится к руке, как палец ноги к...", options: ["Ноге", "Ступне", "Руке", "Ногтю"], correctAnswer: 1, category: 'Вербальный' },
      { question: "Если все Зипы - это Запы, и все Запы - это Зопы, являются ли все Зипы Зопами?", options: ["Да", "Нет", "Возможно", "Невозможно определить"], correctAnswer: 0, category: 'Логика' }
    ],
  },
  en: {
    startScreen: {
      title: "IQ Test for 9th Grade",
      description: "Test your logical, mathematical, and verbal reasoning skills.",
      questionsLabel: "Number of questions:",
      timeLabel: "Time limit:",
      instructions: "Try to answer quickly and accurately. Good luck!",
      startButton: "Start Test",
      creator: "Created by: Qodirova Zulfiyaxon"
    },
    testView: {
      questionLabel: "question"
    },
    resultsScreen: {
      title: "Test Finished!",
      feedback: {
        amazing: "Excellent result!",
        good: "Good result!",
        niceTry: "Nice try!",
      },
      scoreLabel: "Your score:",
      iqLabel: "Estimated IQ:",
      iqDisclaimer: "(*This is an estimated value and not a real IQ measurement)",
      reviewLabels: {
        yourAnswer: "Your answer:",
        noAnswer: "Not answered",
        correctAnswer: "Correct answer:",
      },
      restartButton: "Try Again",
      creator: "Created by: Qodirova Zulfiyaxon"
    },
    questions: [
      { question: "What number logically follows in this series? 4, 6, 9, 13, ...", options: ["18", "17", "16", "19"], correctAnswer: 0, category: 'Logic' },
      { question: "A baseball bat and a ball cost 1100 som in total. The bat costs 1000 som more than the ball. How much does the ball cost?", options: ["100 som", "50 som", "1000 som", "150 som"], correctAnswer: 1, category: 'Math' },
      { question: "A book is to reading as a fork is to...", options: ["Drawing", "Writing", "Eating", "Singing"], correctAnswer: 2, category: 'Verbal' },
      { question: "If a 3x3x3 cube is painted on the outside and then cut into 1x1x1 smaller cubes, how many of the smaller cubes will have only one side painted?", options: ["6", "8", "12", "27"], correctAnswer: 0, category: 'Spatial' },
      { question: "Which word is the odd one out?", options: ["House", "Iglu", "Bungalow", "Office"], correctAnswer: 3, category: 'Verbal' },
      { question: "A car travels at 60 km per hour. How far does it travel in 10 minutes?", options: ["6 km", "10 km", "12 km", "15 km"], correctAnswer: 1, category: 'Math' },
      { question: "If you rearrange the letters 'CIFAIPC', you would have the name of a:", options: ["City", "Animal", "Ocean", "Country"], correctAnswer: 2, category: 'Verbal' }, // PACIFIC
      { question: "What is the next prime number after 13?", options: ["14", "15", "16", "17"], correctAnswer: 3, category: 'Math' },
      { question: "If you fold a square piece of paper in half, then in half again, and punch a hole in the center, how many holes will there be when you unfold it?", options: ["1", "2", "3", "4"], correctAnswer: 3, category: 'Spatial' },
      { question: "Find the missing number: 8, 27, 64, 125, ?", options: ["196", "216", "225", "256"], correctAnswer: 1, category: 'Logic' }, // 2^3, 3^3...
      { question: "A farmer had 17 sheep. All but 9 died. How many sheep are left?", options: ["8", "17", "9", "0"], correctAnswer: 2, category: 'Logic' },
      { question: "Which shape can be made by folding the given pattern?", options: ["Pyramid", "Cube", "Cylinder", "Sphere"], correctAnswer: 1, category: 'Spatial' },
      { question: "A doctor's office has 4 rooms. If the doctor spends 15 minutes with each patient, how many patients can she see in 2 hours?", options: ["4", "6", "8", "16"], correctAnswer: 2, category: 'Math' }, // 120/15=8
      { question: "Which word completes the analogy: Finger is to Hand as Toe is to...", options: ["Leg", "Foot", "Arm", "Nail"], correctAnswer: 1, category: 'Verbal' },
      { question: "If all Zips are Zaps, and all Zaps are Zops, are all Zips Zops?", options: ["Yes", "No", "Maybe", "Cannot be determined"], correctAnswer: 0, category: 'Logic' }
    ],
  },
};

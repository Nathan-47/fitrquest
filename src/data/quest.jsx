const Quest = [
    {
        question: "I am...",
        id: 0,
        answerA: "15-44",
        idNextQuestionA: 1,
        answerB: "45+",
        idNextQuestionB: 2
    },
    {
        question: "How active are you everyday (office, construction etc)?",
        id: 1,
        answerA: "Very",
        idNextQuestionA: 2,
        answerB: "Semi/Not really",
        idNextQuestionB: 2
    },
    {
        question: "How intense would you like to train?",
        id: 2,
        answerA: "Medium-High",
        idNextQuestionA: 4,
        answerB: "Low-Medium",
        idNextQuestionB: 3 
    },
    {
        question: "Which of the following do you want?",
        id: 3,
        answerA: "Lose weight/Maintain",
        idNextQuestionA: 6,
        answerB: "Gain weight",
        idNextQuestionB: 5
    },
    {
        question: "What interests you more?",
        id: 4,
        answerA: "Weightlifting",
        idNextQuestionA: 5,
        answerB: "Cardio",
        idNextQuestionB: 6
    },
    {
        question: "How much food would you say you eat?",
        id: 5,
        answerA: "Normal or low amount",
        idNextQuestionA: 6,
        answerB: "Big amount",
        idNextQuestionB: 7
    },
    {
        question: "Do you want to be?",
        id: 6,
        answerA: "Stronger",
        idNextQuestionA: 8,
        answerB: "Athletic",
        idNextQuestionB: 9 
    },
    {
        id: 7,
        question: "Bodybuilding",
        intro: "Your journey has led you to Bodybuilding! 💪",
        content: "From your input, you have been seen fit to begin your bodybuilding journey. We’ll provide a beginner orientated roadmap to help you get stronger plus gain size and strength whilst looking good.",

        training: 'Focus on compound movements and full-body routines that target all major muscle groups. Using the program link below it allows you to see how the exercise are executed via video form.',

        nutrition: 'Use the calorie parameters as a guide to adjust your macro tracker if you want to using Marco Finder Link [1]. \n For an automated meal plan to fit your calorie intake use the Meal Plan link [2] to make meal planning healthier and easier.',

        answerlink1: 'https://www.calculator.net/macro-calculator.html',
        answerLink2: 'https://www.eatthismuch.com/',
        answerLink3: 'tkt_ju3NoUw',


        recovery: 'Proper recovery is essential to progress in bodybuilding. Please check out both videos that discuss DOMS recovery and a checklist of steps to recovery efficiently.',
        recoveryLink: 'https://www.healthline.com/health/muscle-recovery#injury-prevention',
        recoveryvid: 'PUJpU6Ti5jU',

        learn: 'Here are steps on how to program your bodybuilding future \n\n 1. Understand Bodybuilding Basics\n The primary focus is performing exercises that target muscle all muscle groups, often with a higher volume of sets and reps. You must include key principles such as progressive overload, proper form, muscle recovery, and consistency. \n\n  2. Set Your Goals \n Establish both short and long-term goals to stay motivated and focused on your physique development for example gaining muscle mass, improving body composition, or enhancing strength. \n\n 3. Choose a Program \n Beginners: If you"re new to bodybuilding, focus on full-body workouts that target all major muscle groups 3 times per week. Examples are using StrongLifts 5x5 or Full-Body Workout Split. These routines help build foundational strength and muscle mass.. \n\n  4. Track Your Progress \n Monitor your progress by tracking key metrics such as weight lifted, number of sets, reps, body measurements, and body composition. Regularly adjust your workouts to ensure continuous progression, making sure to focus on muscle recovery to avoid overtraining. \n\n  5. Nutrition \n Fuel your body with a balanced diet rich in lean proteins (chicken, fish, tofu), complex carbohydrates (sweet potatoes, rice), and healthy fats (avocados, nuts). Ensure you"re eating enough to support muscle growth, aiming for a slight calorie surplus if bulking or maintaining a calorie deficit if cutting.',

        imgFile: 'src/images/influencers/sam_sulek.jpg',
        imgFile2: 'src/images/influencers/jeff_nippard.jpg',
        imgFile3: 'src/images/influencers/natasha_aughey.jpg',
        
        altTag1: 'Sam Sulek doing the double bicep pose',
        altTag2: 'Jeff hitting the double bicep pose',
        altTag3: 'natasha standing smiling at the camera',

        imgFileName:'Sam Sulek',
        imgFileName2:'Jeff Nippard',
        imgFileName3:'Natasha Aughey',

        instaName: 'sam_sulek',
        instaName2: 'jeffnippard',
        instaName3: 'natashaughey_',
        
        answerInfo: '',

        answerVideo: 'HuXijX93w0o?si=pZx4gGJnCAL7FiO5',
    },
    {
        id: 8,
        question: "Powerlifting",
        intro: "Your journey has led you to Powerlifting! 💪",
        content: "From your input, you have been seen fit to begin your powerlifting journey. We’ll provide a beginner orientated roadmap to help you get stronger, master the three main lifts, and optimise your training for strength gains.",

        training: 'Focus on compound movements and full-body routines that target all major muscle groups.',

        // TODO: Need to create a link same as the answerLinks below

        nutrition: 'We recommend to eat 2,500Kcal - 3,000Kcal+ but you can adjust using the Marco Finder [1] to suit your daily routine. \n For an automated meal plan to fit your calorie intake use the Meal Plan link [2] to make meal planning healthier and easier. \n To track your calories and weight use our recommended app MyFitnessPal as it easy to use and navigate through for all levels [3].',

        answerlink1: 'https://www.calculator.net/macro-calculator.html',
        answerLink2: 'https://www.eatthismuch.com/',
        answerLink3: 'tkt_ju3NoUw',


        recovery: 'Proper recovery is essential to progress in Powerlifting. Please check out both videos that discuss DOMS recovery and a checklist of steps to recovery efficiently.',
        recoveryLink: 'https://www.healthline.com/health/muscle-recovery#injury-prevention',
        recoveryvid: 'PUJpU6Ti5jU',

        learn: 'Here are steps on how to program your Powerlifting future \n\n 1. Understand Powerlifting Basics\n Powerlifting focuses on three lifts: squat, bench press, and deadlift. Key principles include progressive overload, proper form, and consistency. \n\n  2. Set Your Goals \n Define short-term and long-term goals (e.g., increasing your 1RM). Use/research the SMART goal system to stay focused and motivated. \n\n 3. Choose a Program \n Start with beginner programs like Starting Strength for fundamental strength, or try 5/3/1 for flexibility as you progress. Advanced lifters can explore Westside Barbell for specialized methods. \n\n  4. Track Your Progress \n Track your lifts, volume, and intensity weekly. Adjust your training to ensure gradual improvement without overtraining. \n\n  5. Nutrition \n Fuel your body with a balanced diet rich in lean proteins (chicken, fish, tofu), complex carbohydrates (sweet potatoes, rice), and healthy fats (avocados, nuts). Ensure you"re eating enough to support muscle growth, aiming for a calorie surplus. \n\n 6. Sample Weekly Plan \n Beginners: Squat, bench, and deadlift (3x a week). \n Advanced: Max effort days for each lift, plus accessory work.',
        
        imgFile: 'src/images/influencers/brian_alshrue.jpg',
        imgFile2: 'src/images/influencers/gym_reaper.jpg',
        imgFile3: 'src/images/influencers/russel_orhii.jpg',

        altTag1: 'Brian in a camo cap looking to the left',
        altTag2: 'Gym Reaper wearing his cap backwards about to spot someone benching',
        altTag3: 'Russel hitting a bicep flex staring at the camera with a sweat band on',

        imgFileName:'Brian Alshrue',
        imgFileName2:'Gym Reaper',
        imgFileName3:'Russel Orhii',

        instaLink: 'brian.alsruhe',
        instaName2: 'bigboybake',
        instaName3: 'russwole',

        answerInfo: '',

        answerVideo: 'YfOI8BdrntQ',
    },
    {
        id: 9,
        question: "Crossfit/Hyrox",
        intro: "Your journey has led you to CrossFit/Hyrox! 🏃‍♀️🏃‍♂️",
        content: "From your input, you have been fit to begin your CrossFit/Hyrox journey. Whether you're aiming to improve your overall fitness or compete, we’ll provide a beginner’s guide to help you learn functional movements, gain endurance, and get strong whilst having fun.",

        training: 'A great recommendation would be to use the [1] WOD website that allows users to adjust equipment usage, follow along with videos and sort by newest or popular workouts. A popular method for beginners is to half any WOD you come across to make workout easier.',

        trainingLink: 'https://wodwell.com/wods/?sort=newest',

        nutrition: 'We recommend to eat 2,200 - 2,800Kcal if you are a beginner/intermediate and 2,800 - 3,500Kcal if you are a more advanced. You can adjust using the Marco Finder [1] to suit your daily routine. \n For an automated meal plan to fit your calorie intake use the Meal Plan link [2] to make meal planning healthier and easier. \n To track your calories and weight use our recommended app MyFitnessPal as it easy to use and navigate through for all levels [3]. \n\n The calorie range for a Hyrox/CrossFit participant can vary on many factors, including workout intensity, body composition, age and gender.',

        answerlink1: 'https://www.calculator.net/macro-calculator.html',
        answerLink2: 'https://www.eatthismuch.com/',
        answerLink3: 'tkt_ju3NoUw',


        recovery: 'Regarding both sports recovery is imperative as you are working your full body at an intense level.',
        recoveryLink: 'https://www.healthline.com/health/muscle-recovery#injury-prevention',
        recoveryvid: 'PUJpU6Ti5jU',

        learn: 'Here are steps on how to program your Crosfit/hyrox future \n\n 1. Set Your Goals\n Powerlifting focuses on three lifts: squat, bench press, and deadlift. Key principles include progressive overload, proper form, and consistency. \n\n 2. Choose a Program \n Focus on workouts that combine weightlifting, gymnastics, and metabolic conditioning (WODs). \n\n 3. Track Your Progress \n Record your times, reps, and weights during each workout. Regularly test yourself with benchmark WODs or Hyrox simulations to gauge improvement. \n\n  4. Nutrition & Recovery \n Fuel your body with balanced macros, especially carbs for energy and protein for recovery. Make recovery a priority with proper sleep, stretching, and active rest days. \n\n  5. Sample Weekly Plan \n 3-5 WODs per week, mixing strength, cardio, and gymnastics.',
        
        
        imgFile: 'src/images/influencers/lucy_davis.jpg',
        imgFile2: 'src/images/influencers/obi_vincent.jpg',
        imgFile3: 'src/images/influencers/team_richey.jpg',

        altTag1: 'Lucy hitting the double bicep flex pose',
        altTag2: 'Obi in a red hoodies sitting down looking away from camera',
        altTag3: 'Team Richey with no top on flexing with a cap on',

        imgFileName:'Lucy Davis Fit',
        imgFileName2:'Obi Vincent',
        imgFileName3:'TeamRichey',

        instaLink: 'lucydavis_fit',
        instaName2: 'obi_vincent',
        instaName3: 'carrichey',

        answerInfo: '',

        answerVideo: '-9SNmXUAVwQ',
    },
];

export default Quest;

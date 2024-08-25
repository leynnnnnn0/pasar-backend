import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

export const dummyExam = async (req, res) => {
    res.json([
        {
            "question": "What is the primary principle of HCI?",
            "options": ["a. User Experience", "b. Usability", "c. Knowing the User", "d. Accessibility"],
            "answer": "Knowing the User"
        },
        {
            "question": "Which principle refers to the reflection of various actions and processes in human’s daily life?",
            "options": ["a. Natural Interaction and Interface", "b. Flexibility", "c. User Control", "d. Feedback"],
            "answer": "Natural Interaction and Interface"
        },
        {
            "question": "How many specific information can a human's short term memory hold?",
            "options": ["a. Five", "b. Nine", "c. Seven", "d. Twelve"],
            "answer": "Nine"
        },
        {
            "question": "Which principle involves employing interfaces that remind users of important information or actions to be performed?",
            "options": ["a. User Control", "b. Consistency", "c. Remind Users", "d. Feedback"],
            "answer": "Remind Users"
        },
        {
            "question": "What does HCI stand for?",
            "options": ["a. Human-Computer Interface", "b. Human-Cognitive Interaction", "c. Human-Computer Interaction", "d. Human-Centered Interface"],
            "answer": "Human-Computer Interaction"
        },
        {
            "question": "What is a key factor in designing user-friendly interfaces?",
            "options": ["a. Usability", "b. User Feedback", "c. Accessibility", "d. Navigation"],
            "answer": "User Feedback"
        },
        {
            "question": "Which method is commonly used to test usability in HCI?",
            "options": ["a. Survey", "b. User Testing", "c. A/B Testing", "d. Eye Tracking"],
            "answer": "User Testing"
        },
        {
            "question": "What does the principle of 'Consistency' focus on in HCI?",
            "options": ["a. Uniformity across interfaces", "b. User Control", "c. Error Prevention", "d. Flexibility"],
            "answer": "Uniformity across interfaces"
        },
        {
            "question": "Which HCI principle aims to make interfaces easier to learn and use?",
            "options": ["a. Simplicity", "b. Flexibility", "c. Minimize Cognitive Load", "d. Visibility"],
            "answer": "Minimize Cognitive Load"
        },
        {
            "question": "What is the goal of 'Error Prevention' in HCI?",
            "options": ["a. Increase error tolerance", "b. Reduce mistakes users can make", "c. Enhance Feedback", "d. Improve Accessibility"],
            "answer": "Reduce mistakes users can make"
        },
        {
            "question": "How can 'Feedback' improve user experience in HCI?",
            "options": ["a. Provides confirmation of actions", "b. Reduces errors", "c. Improves accessibility", "d. Increases usability"],
            "answer": "Provides confirmation of actions"
        },
        {
            "question": "Which principle emphasizes designing interfaces that are easy to navigate?",
            "options": ["a. Simplicity", "b. User Control", "c. Flexibility", "d. Feedback"],
            "answer": "Simplicity"
        },
        {
            "question": "What role does 'Visibility' play in HCI?",
            "options": ["a. Ensures users can find and access features", "b. Improves feedback", "c. Reduces cognitive load", "d. Enhances learnability"],
            "answer": "Ensures users can find and access features"
        },
        {
            "question": "What does 'Learnability' refer to in the context of HCI?",
            "options": ["a. How easy it is for users to learn to use the system", "b. How quickly users can complete tasks", "c. The system's flexibility", "d. The system's responsiveness"],
            "answer": "How easy it is for users to learn to use the system"
        },
        {
            "question": "Which aspect of HCI design focuses on reducing user errors?",
            "options": ["a. Error Prevention", "b. Consistency", "c. Flexibility", "d. Simplicity"],
            "answer": "Error Prevention"
        },
        {
            "question": "What does 'Accessibility' ensure in HCI design?",
            "options": ["a. That all users, including those with disabilities, can use the system", "b. That the system is easy to navigate", "c. That users receive feedback", "d. That the system is flexible"],
            "answer": "That all users, including those with disabilities, can use the system"
        },
        {
            "question": "Statement 1: Cognitive Load Theory emphasizes the importance of reducing extraneous cognitive load. Statement 2: Cognitive Load Theory suggests increasing intrinsic cognitive load to enhance learning.",
            "options": ["a. First Statement is correct", "b. Second Statement is correct", "c. Both statements are correct", "d. Both statements are incorrect"],
            "answer": "a"
        },
        {
            "question": "Statement 1: Usability testing is typically done after the final design phase. Statement 2: Usability testing is often iterative, occurring throughout the design process.",
            "options": ["a. First Statement is correct", "b. Second Statement is correct", "c. Both statements are correct", "d. Both statements are incorrect"],
            "answer": "b"
        },
        {
            "question": "Statement 1: HCI emphasizes user-centered design. Statement 2: HCI focuses primarily on the technology used.",
            "options": ["a. First Statement is correct", "b. Second Statement is correct", "c. Both statements are correct", "d. Both statements are incorrect"],
            "answer": "a"
        },
        {
            "question": "Statement 1: Accessibility is an optional aspect of HCI design. Statement 2: Accessibility is essential for ensuring that all users can interact with the system.",
            "options": ["a. First Statement is correct", "b. Second Statement is correct", "c. Both statements are correct", "d. Both statements are incorrect"],
            "answer": "b"
        },
        {
            "question": "Statement 1: User feedback is crucial for improving interface design. Statement 2: Feedback should be ignored if it conflicts with the designer's vision.",
            "options": ["a. First Statement is correct", "b. Second Statement is correct", "c. Both statements are correct", "d. Both statements are incorrect"],
            "answer": "a"
        },
        {
            "question": "Statement 1: HCI principles apply only to software interfaces. Statement 2: HCI principles can also be applied to hardware design.",
            "options": ["a. First Statement is correct", "b. Second Statement is correct", "c. Both statements are correct", "d. Both statements are incorrect"],
            "answer": "b"
        },
        {
            "question": "Statement 1: User testing is an important part of the HCI process. Statement 2: User testing can be skipped if the design is based on best practices.",
            "options": ["a. First Statement is correct", "b. Second Statement is correct", "c. Both statements are correct", "d. Both statements are incorrect"],
            "answer": "a"
        },
        {
            "question": "Statement 1: Consistency in design helps users predict what will happen next. Statement 2: Inconsistent design keeps users engaged and curious.",
            "options": ["a. First Statement is correct", "b. Second Statement is correct", "c. Both statements are correct", "d. Both statements are incorrect"],
            "answer": "a"
        },
        {
            "question": "Statement 1: Error prevention is more important than error recovery in HCI. Statement 2: Allowing users to make mistakes can lead to better learning experiences.",
            "options": ["a. First Statement is correct", "b. Second Statement is correct", "c. Both statements are correct", "d. Both statements are incorrect"],
            "answer": "a"
        },
        {
            "question": "Statement 1: A well-designed interface should be intuitive to use. Statement 2: Users should always rely on manuals or help sections to understand the interface.",
            "options": ["a. First Statement is correct", "b. Second Statement is correct", "c. Both statements are correct", "d. Both statements are incorrect"],
            "answer": "a"
        },
        {
            "question": "Statement 1: The layout of an interface should guide users' actions. Statement 2: The layout is less important than the content presented.",
            "options": ["a. First Statement is correct", "b. Second Statement is correct", "c. Both statements are correct", "d. Both statements are incorrect"],
            "answer": "a"
        },
        {
            "question": "Statement 1: HCI only applies to digital interfaces. Statement 2: HCI principles can be applied to any human-machine interaction.",
            "options": ["a. First Statement is correct", "b. Second Statement is correct", "c. Both statements are correct", "d. Both statements are incorrect"],
            "answer": "b"
        },
        {
            "question": "Statement 1: Good HCI design is universal and requires no user adaptation. Statement 2: HCI design must consider the specific needs of different user groups.",
            "options": ["a. First Statement is correct", "b. Second Statement is correct", "c. Both statements are correct", "d. Both statements are incorrect"],
            "answer": "b"
        },
        {
            "question": "Statement 1: The goal of HCI is to create interfaces that are usable. Statement 2: The goal of HCI is to create interfaces that are innovative, even if they are less usable.",
            "options": ["a. First Statement is correct", "b. Second Statement is correct", "c. Both statements are correct", "d. Both statements are incorrect"],
            "answer": "a"
        }
    ]);
}

export const generateExam = async (req, res) => {
    const topic = req.body.topic;
    if (!topic) {
        return res.status(400).json({ success: false, message: 'Topic is required' });
    }

    try {
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo-1106',
            messages: [{
                "role": "user",
                "content": `Generate a JSON array containing exactly 30 multiple-choice questions about the topic: ${topic}. Use the following structure:

                [
                  {
                    "question": "What is ...?",
                    "options": ["a. Option 1", "b. Option 2", "c. Option 3", "d. Option 4"],
                    "answer": "Option 4"
                  }
                ]

                Instructions:
                1. Questions 1-15: Use direct questions with four options.
                2. Questions 16-30: Use two-statement format:
                   "question": "Statement 1: ... Statement 2: ...",
                   "options": ["a. First Statement is correct", "b. Second Statement is correct", "c. Both statements are correct", "d. Both statements are incorrect"]
                3. The "answer" field must contain the full text of the correct option.
                4. Ensure all questions relate to ${topic}, options are plausible, and answers are correct.
                5. Maintain consistent JSON formatting for all 30 questions.
                6. Output only the JSON array, with no additional text before or after.

                Respond with a single, valid JSON array containing all 30 questions.`
            }],
        });

        const completion = response.choices[0].message.content;
        let parsedCompletion;
        try {
            parsedCompletion = JSON.parse(completion);
        } catch (parseError) {
            console.error('Failed to parse API response:', completion);
            return res.status(500).json({ success: false, message: 'Failed to generate a valid question' });
        }

        res.json(parsedCompletion);
    } catch (error) {
        console.error('OpenAI API error:', error);
        res.status(500).json({ success: false, message: 'Failed to generate question', error: error.message });
    }
}
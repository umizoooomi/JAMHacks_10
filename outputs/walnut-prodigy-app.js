const sections = {
      expression: {
        icon: '☁️',
        badge: 'Cloud badge',
        reward: 'Sky Spark',
        title: 'Expression',
        description: 'Float through clouds, learn feelings, and see how weather shows emotion. This world helps you understand yourself with calm, creative stories.',
        panelTitle: 'Cloud world preview',
        panelText: 'Step into a dreamy weather world where sunshine, clouds, and gentle storms show how feelings move. Play with weather moods and learn your emotions through art.',
        topics: [
          {
            title: 'Cloud Moods',
            subtitle: 'Match weather to feelings',
            lessonText: [
              'Cloud Moods helps you notice how rainy, sunny, and windy days can feel inside your heart.',
              'When a friend feels sad like rain, you can choose kindness and calm words to help them.',
              'Practicing how feelings move is the first step toward making wise choices.'
            ],
            questions: [
              {
                question: 'If a rainy cloud feels like sadness and a bright sun feels like joy, which weather helps a friend feel calm?',
                answers: ['Thunderstorm', 'Gentle rain', 'Snow flurry', 'Rainbow'],
                correct: 1
              },
              {
                question: 'A windy day can feel exciting, but also a little restless. Which feeling best matches a happy, moving wind?',
                answers: ['Tired', 'Excited', 'Scared', 'Lonely'],
                correct: 1
              },
              {
                question: 'When the sky is soft blue and still, what feeling is the cloud teaching us?',
                answers: ['Calm', 'Angry', 'Bored', 'Confused'],
                correct: 0
              }
            ]
          },
          {
            title: 'Feelings Weather',
            subtitle: 'Learn what colors and clouds can mean',
            lessonText: [
              'Feelings Weather uses colors and clouds to explain emotions in a gentle way.',
              'Blue skies can feel peaceful, while bright orange can feel warm and excited.',
              'Understanding these moods helps you make smart choices with friends and family.'
            ],
            questions: [
              {
                question: 'In our cloud world, soft blue skies usually show peace. What emotion does gentle blue teach?',
                answers: ['Anger', 'Calm', 'Confusion', 'Boredom'],
                correct: 1
              },
              {
                question: 'A storm cloud means someone is upset. What is a good way to help them feel better?',
                answers: ['Shout louder', 'Listen carefully', 'Ignore them', 'Take their toy'],
                correct: 1
              },
              {
                question: 'Warm orange light in the sky feels cozy. Which feeling is it most like?',
                answers: ['Brave', 'Nervous', 'Cozy', 'Empty'],
                correct: 2
              }
            ]
          },
          {
            title: 'Art of Emotion',
            subtitle: 'Paint feelings with color and shape',
            lessonText: [
              'Art of Emotion shows how drawings, music, and colors can share a feeling without words.',
              'When you paint a picture, you choose shapes that show calm, brave, or joyful moods.',
              'This helps you notice your own thoughts and share them with others.'
            ],
            questions: [
              {
                question: 'A picture of warm orange paint makes the hero feel cozy. What feeling does warm orange usually show?',
                answers: ['Angry', 'Calm', 'Warmth', 'Sleepy'],
                correct: 2
              },
              {
                question: 'The story asks you to draw a Happy Cloud. Which shape is best for a gentle happy cloud?',
                answers: ['Sharp spikes', 'Soft round bubbles', 'Straight lines', 'Jagged edges'],
                correct: 1
              },
              {
                question: 'Music can feel bright like yellow or calm like blue. Which color is best for a soft, quiet song?',
                answers: ['Red', 'Blue', 'Green', 'Black'],
                correct: 1
              }
            ]
          }
        ]
      },
      linguistics: {
        icon: '📜',
        badge: 'Scroll key',
        reward: 'Wisdom Seal',
        title: 'Linguistics',
        description: 'Ancient scrolls, secret words, and language puzzles await. This world helps you discover patterns in sounds, roots, and letters.',
        panelTitle: 'Secret script preview',
        panelText: 'Enter an Egyptian and Latin-inspired word world. Decode ancient symbols, explore roots, prefixes, and suffixes, and uncover language secrets like a puzzle.',
        topics: [
          {
            title: 'Root Discoveries',
            subtitle: 'Find the meaning in word parts',
            lessonText: [
              'Root Discoveries teaches how smaller pieces of words carry meaning.',
              'When you learn roots like bio-, tele-, or auto-, secret word families become easy.',
              'This makes reading new words feel like solving a mystery.'
            ],
            questions: [
              {
                question: 'If "bio" means life and "graph" means write, what does "biography" mean?',
                answers: ['Animal story', 'Life writing', 'Fast drawing', 'Sound picture'],
                correct: 1
              },
              {
                question: 'The word "tele" means far. Which word means "send far"?',
                answers: ['Telephone', 'Teleport', 'Telepathy', 'Television'],
                correct: 1
              },
              {
                question: 'If "auto" means self, what does "autograph" mean?',
                answers: ['Self write', 'Space travel', 'Sound check', 'Brainstorm'],
                correct: 0
              }
            ]
          },
          {
            title: 'Word Magic',
            subtitle: 'Play with prefixes and suffixes',
            lessonText: [
              'Word Magic shows how adding pieces to words changes their meaning.',
              'A prefix like un- can flip a word, and a suffix like -ness can turn it into a feeling.',
              'Building words helps you understand language faster and more clearly.'
            ],
            questions: [
              {
                question: 'If "happy" becomes "happiness", what part was added at the end?',
                answers: ['Prefix', 'Root', 'Suffix', 'Symbol'],
                correct: 2
              },
              {
                question: 'The prefix "sub-" means under. Which word means under water?',
                answers: ['Submarine', 'Superhero', 'Subtitle', 'Submit'],
                correct: 0
              },
              {
                question: 'If "happy" becomes "unhappy", what does "un-" do to the word?',
                answers: ['Makes it larger', 'Makes it smaller', 'Changes meaning', 'Adds sound'],
                correct: 2
              }
            ]
          },
          {
            title: 'Ancient Patterns',
            subtitle: 'Decode symbols and secret rules',
            lessonText: [
              'Ancient Patterns helps you see repeating shapes and hidden language rules.',
              'Written symbols can be like puzzles that repeat the same sounds or meanings.',
              'This skill is important for reading, writing, and solving word mysteries.'
            ],
            questions: [
              {
                question: 'A secret scroll shows three shapes repeating: circle, square, circle. What comes next?',
                answers: ['Circle', 'Square', 'Triangle', 'Line'],
                correct: 1
              },
              {
                question: 'If a symbol means "sound" and one means "quiet", which pair would show a quiet word?',
                answers: ['Sound + loud', 'Silent + soft', 'Fast + bright', 'Hot + cold'],
                correct: 1
              },
              {
                question: 'If you see symbols that repeat in the same order, what are you noticing?',
                answers: ['A pattern', 'A color', 'A story', 'A number'],
                correct: 0
              }
            ]
          }
        ]
      },
      logic: {
        icon: '🏛️',
        badge: 'Ruins token',
        reward: 'Logic Gem',
        title: 'Logic',
        description: 'Travel into Greek-inspired ruins where puzzles, patterns, and reasoning help you become a stronger thinker.',
        panelTitle: 'Ruins of reason preview',
        panelText: 'Journey through Greek-inspired ruins where thinkers like Plato and Pythagoras lived. Solve pattern puzzles, cause-and-effect quests, and playful reasoning lessons.',
        topics: [
          {
            title: 'Sort the Shapes',
            subtitle: 'Group items by what they have in common',
            lessonText: [
              'Sort the Shapes teaches how to group things that belong together.',
              'This is the first step in logic: find what is the same and what is different.',
              'When you group things well, solving puzzles becomes like a game.'
            ],
            questions: [
              {
                question: 'Which group belongs together: apples, bananas, and oranges or cars, boats, and trains?',
                answers: ['Fruits', 'Vehicles', 'Colors', 'Sounds'],
                correct: 0
              },
              {
                question: 'If the puzzle wants all round objects, which belongs in the same group?',
                answers: ['Ball', 'Book', 'Pencil', 'Shoe'],
                correct: 0
              },
              {
                question: 'Which pair are both small animals: cat and dog, or tree and rock?',
                answers: ['Cat and dog', 'Tree and rock', 'Cat and tree', 'Dog and rock'],
                correct: 0
              }
            ]
          },
          {
            title: 'Cause and Effect',
            subtitle: 'Learn what happens next',
            lessonText: [
              'Cause and Effect shows how one thing leads to another.',
              'Like a seed growing when watered or a light turning on when a switch is pushed.',
              'This helps you think ahead and solve problems clearly.'
            ],
            questions: [
              {
                question: 'If you drop an apple, what happens next?',
                answers: ['It flies up', 'It rolls away', 'It falls down', 'It disappears'],
                correct: 2
              },
              {
                question: 'When you water a plant, the plant usually...',
                answers: ['Laughs', 'Grows', 'Runs', 'Flies'],
                correct: 1
              },
              {
                question: 'If you press a switch, the light will...',
                answers: ['Turn on', 'Eat food', 'Sing', 'Disappear'],
                correct: 0
              }
            ]
          },
          {
            title: 'Pattern Paths',
            subtitle: 'Find the next item in a sequence',
            lessonText: [
              'Pattern Paths helps you follow the order of shapes, colors, and sounds.',
              'When you see patterns, you can guess what comes next and solve puzzles faster.',
              'This skill is useful in math, reading, and everyday thinking.'
            ],
            questions: [
              {
                question: 'What comes next in this pattern: star, circle, star, circle, ...?',
                answers: ['Star', 'Square', 'Triangle', 'Circle'],
                correct: 0
              },
              {
                question: 'You see the pattern: red, blue, red, blue. Which color is next?',
                answers: ['Green', 'Blue', 'Red', 'Yellow'],
                correct: 2
              },
              {
                question: 'If the pattern is big, small, big, small, what is next?',
                answers: ['Big', 'Medium', 'Small', 'Tiny'],
                correct: 2
              }
            ]
          }
        ]
      }
    };

    const buddyLines = {
      question: [
        'What do you wonder about today? Try asking how a cloud feels when it is happy.',
        'Think about how words can be secret codes. What pattern do you see in "happy" and "happiness"?'
      ],
      tip: [
        'Short lessons every day help your brain grow stronger like a tree.',
        'Notice the small changes in weather and feelings. That is pattern recognition.',
        'Talking about how you feel is an important thinking skill.'
      ]
    };

    let currentSection = 'expression';
    let currentTopic = 0;
    let currentQuestion = 0;
    let quizComplete = false;
    let currentAnswerState = false;
    const resumeProgress = {};

    const sectionScreen = document.getElementById('sectionScreen');
    const topicScreen = document.getElementById('topicScreen');
    const lessonScreen = document.getElementById('lessonScreen');
    const sectionTitle = document.getElementById('sectionTitle');
    const sectionDescription = document.getElementById('sectionDescription');
    const sectionPreviewTitle = document.getElementById('sectionPanelTitle');
    const sectionPreviewText = document.getElementById('sectionPanelText');
    const topicList = document.getElementById('topicList');
    const sectionProgress = document.getElementById('sectionProgress');
    const lastVisited = document.getElementById('lastVisited');
    const lessonDetails = document.getElementById('lessonDetails');
    const startQuizButton = document.getElementById('startQuizButton');
    const lessonSectionLabel = document.getElementById('lessonSectionLabel');
    const lessonTopicLabel = document.getElementById('lessonTopicLabel');
    const lessonQuestion = document.getElementById('lessonQuestion');
    const lessonDetail = document.getElementById('lessonDetail');
    const answerGrid = document.getElementById('answerGrid');
    const lessonList = document.getElementById('lessonList');
    const lessonHeader = document.getElementById('topicHeader');
    const topicDescription = document.getElementById('topicDescription');
    const lessonPanelTitle = document.getElementById('lessonPanelTitle');
    const lessonPanelText = document.getElementById('lessonPanelText');
    const resumeText = document.getElementById('resumeText');
    const resumeButton = document.getElementById('resumeButton');
    const topicProgress = document.getElementById('topicProgress');
    const nextLessonButton = document.getElementById('nextLessonButton');
    const submitButton = document.getElementById('submitButton');
    const questionProgress = document.getElementById('questionProgress');
    const quizHint = document.getElementById('quizHint');
    const finishBanner = document.getElementById('finishBanner');
    const buddyToggle = document.getElementById('buddyToggle');
    const buddyPopover = document.getElementById('buddyPopover');
    const buddyText = document.getElementById('buddyText');
    const buddyAsk = document.getElementById('buddyAsk');
    const buddyTip = document.getElementById('buddyTip');
    const topicIcons = {
      expression: ['☁️', '🌦️', '🎨'],
      linguistics: ['📜', '🔤', '🪨'],
      logic: ['🧩', '⚡', '🏛️']
    };

    const portalRow = document.getElementById('portalRow');
    const statusQuests = document.getElementById('statusQuests');
    const buttons = document.querySelectorAll('[data-screen]');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.screen;
        if (target === 'section') {
          const selected = btn.dataset.section;
          if (selected) {
            openSection(selected);
          } else {
            showScreen('section');
          }
          return;
        }
        showScreen(target);
      });
    });

    startQuizButton.addEventListener('click', () => {
      const saved = getResumeState();
      currentQuestion = saved?.questionIndex ?? 0;
      quizComplete = false;
      showScreen('lesson');
      renderQuiz();
    });

    resumeButton.addEventListener('click', () => {
      const saved = getResumeState();
      currentQuestion = saved?.questionIndex ?? 0;
      quizComplete = false;
      showScreen('lesson');
      renderQuiz();
    });

    nextLessonButton.addEventListener('click', () => {
      currentQuestion += 1;
      renderQuiz();
    });

    submitButton.addEventListener('click', () => {
      quizComplete = true;
      renderQuiz();
    });

    buddyToggle.addEventListener('click', () => {
      buddyPopover.classList.toggle('active');
      buddyPopover.setAttribute('aria-hidden', buddyPopover.classList.contains('active') ? 'false' : 'true');
    });

    buddyAsk.addEventListener('click', () => {
      const index = Math.floor(Math.random() * buddyLines.question.length);
      buddyText.textContent = buddyLines.question[index];
    });

    buddyTip.addEventListener('click', () => {
      const index = Math.floor(Math.random() * buddyLines.tip.length);
      buddyText.textContent = buddyLines.tip[index];
    });

    function showScreen(id) {
      document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.toggle('active', screen.id === id);
      });
      if (id === 'home') {
        renderHome();
      }
      if (id === 'section') {
        renderSection();
      }
      if (id === 'topic') {
        renderTopic();
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function openSection(sectionId) {
      currentSection = sectionId;
      currentTopic = 0;
      currentQuestion = 0;
      quizComplete = false;
      showScreen('section');
    }

    function openTopic(index) {
      currentTopic = index;
      currentQuestion = 0;
      quizComplete = false;
      showScreen('topic');
    }

    function renderSection() {
      const section = sections[currentSection];
      const topic = section.topics[currentTopic];
      sectionScreen.classList.remove('world-expression', 'world-linguistics', 'world-logic');
      sectionScreen.classList.add(`world-${currentSection}`);
      sectionTitle.textContent = section.title;
      sectionDescription.textContent = section.description;
      sectionPreviewTitle.textContent = section.panelTitle;
      sectionPreviewText.textContent = section.panelText;
      topicList.innerHTML = '';
      lessonDetails.innerHTML = '';

      section.topics.forEach((topicData, index) => {
        const icon = topicIcons[currentSection]?.[index] || '⭐';
        const item = document.createElement('li');
        item.className = 'topic-item';
        item.innerHTML = `
          <div style="display:flex; align-items:center; gap:12px;">
            <div class="topic-icon">${icon}</div>
            <div>
              <strong>${topicData.title}</strong>
              <span>${topicData.subtitle}</span>
            </div>
          </div>
          <button class="topic-action" type="button">Pick</button>
        `;
        item.querySelector('button').addEventListener('click', () => openTopic(index));
        topicList.appendChild(item);
      });

      lessonDetails.innerHTML = section.topics[currentTopic].lessonText.map(line => `<li>${line}</li>`).join('');
      sectionProgress.textContent = `${section.topics.length} topics ready to explore`;
      lastVisited.textContent = section.topics[currentTopic].title;
      lessonDetails.classList.remove('hidden');
    }

    function calculateQuestCount() {
      return Object.values(sections).reduce((sum, section) => sum + section.topics.length, 0);
    }

    function renderHome() {
      portalRow.innerHTML = '';
      statusQuests.textContent = calculateQuestCount();
      Object.entries(sections).forEach(([id, section]) => {
        const card = document.createElement('button');
        card.className = `portal-card portal-${id}`;
        card.type = 'button';
        card.dataset.screen = 'section';
        card.dataset.section = id;
        card.setAttribute('aria-label', `Go to ${section.title} world`);
        card.innerHTML = `
          <div class="portal-icon">${section.icon}</div>
          <h3>${section.title}</h3>
          <p>${section.description}</p>
          <span class="portal-badge">${section.badge}</span>
          <div class="portal-quest-line">Quest reward: <strong>${section.reward}</strong></div>
        `;
        card.addEventListener('click', () => openSection(id));
        portalRow.appendChild(card);
      });
    }

    function renderTopic() {
      const section = sections[currentSection];
      const topic = section.topics[currentTopic];
      const saved = getResumeState();
      topicScreen.classList.remove('world-expression', 'world-linguistics', 'world-logic');
      topicScreen.classList.add(`world-${currentSection}`);
      lessonHeader.textContent = `${section.title} • ${topic.title}`;
      topicDescription.textContent = `Explore the lesson path for ${topic.title} in the ${section.title} world.`;
      lessonPanelTitle.textContent = topic.title;
      lessonPanelText.textContent = topic.subtitle;
      lessonList.innerHTML = topic.lessonText.map((line, index) => `<li><strong>Step ${index + 1}</strong>: ${line}</li>`).join('');

      if (saved?.complete) {
        resumeText.textContent = 'You completed this topic. Press Start to replay the challenge or review the lesson steps.';
        resumeButton.classList.add('hidden');
        startQuizButton.classList.remove('hidden');
        startQuizButton.textContent = 'Replay challenge';
        topicProgress.textContent = `Finished: ${topic.questions.length}/${topic.questions.length} questions`;
      } else if (saved) {
        resumeText.textContent = `Resume from question ${saved.questionIndex + 1} in this topic.`;
        resumeButton.classList.remove('hidden');
        startQuizButton.classList.remove('hidden');
        startQuizButton.textContent = 'Continue challenge';
        topicProgress.textContent = `Progress: ${saved.questionIndex}/${topic.questions.length} questions completed`;
      } else {
        resumeText.textContent = 'No lessons started yet. Tap Start to begin your first challenge.';
        resumeButton.classList.add('hidden');
        startQuizButton.classList.remove('hidden');
        startQuizButton.textContent = 'Start challenge';
        topicProgress.textContent = `Ready to begin: 0/${topic.questions.length} questions completed`;
      }
    }

    function renderQuiz() {
      const section = sections[currentSection];
      const topic = section.topics[currentTopic];
      lessonSectionLabel.textContent = section.title;
      lessonTopicLabel.textContent = topic.title;
      lessonDetail.textContent = topic.subtitle;
      lessonScreen.classList.remove('world-expression', 'world-linguistics', 'world-logic');
      lessonScreen.classList.add(`world-${currentSection}`);
      if (quizComplete) {
        answerGrid.innerHTML = '';
        lessonQuestion.textContent = 'You finished the quiz! Great job using your new thinking skills.';
        questionProgress.textContent = `All ${topic.questions.length} questions completed`;
        nextLessonButton.classList.add('hidden');
        submitButton.classList.add('hidden');
        finishBanner.classList.remove('hidden');
        quizHint.textContent = 'Choose "Back" to explore another topic or return to the home world.';
        setResumeState(currentSection, currentTopic, topic.questions.length, true);
        return;
      }

      const question = topic.questions[currentQuestion];
      lessonQuestion.textContent = question.question;
      questionProgress.textContent = `Question ${currentQuestion + 1} of ${topic.questions.length}`;
      answerGrid.innerHTML = '';
      nextLessonButton.classList.add('hidden');
      submitButton.classList.add('hidden');
      finishBanner.classList.add('hidden');
      quizHint.textContent = 'Choose the answer that fits the story. Correct answers unlock the next step.';
      currentAnswerState = false;

      question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = 'answer-button';
        button.type = 'button';
        button.textContent = answer;
        button.addEventListener('click', () => handleAnswer(button, index === question.correct));
        answerGrid.appendChild(button);
      });
    }

    function handleAnswer(button, isCorrect) {
      if (currentAnswerState) return;
      button.classList.add(isCorrect ? 'correct' : 'wrong');
      if (isCorrect) {
        currentAnswerState = true;
        const topic = sections[currentSection].topics[currentTopic];
        const nextIndex = currentQuestion + 1;
        if (nextIndex >= topic.questions.length) {
          setResumeState(currentSection, currentTopic, topic.questions.length, true);
          quizHint.textContent = 'You answered all questions. Finish the quiz to complete the challenge.';
          submitButton.classList.remove('hidden');
          nextLessonButton.classList.add('hidden');
        } else {
          setResumeState(currentSection, currentTopic, nextIndex, false);
          quizHint.textContent = 'Nice work! You can move to the next question.';
          nextLessonButton.classList.remove('hidden');
          submitButton.classList.add('hidden');
        }
        document.querySelectorAll('.answer-button').forEach(btn => btn.disabled = true);
      } else {
        button.disabled = true;
        quizHint.textContent = 'That one is close. Read the question again and try a different choice.';
      }
    }

    function setResumeState(sectionId, topicIndex, questionIndex, complete) {
      if (!resumeProgress[sectionId]) resumeProgress[sectionId] = {};
      resumeProgress[sectionId][topicIndex] = { questionIndex, complete };
    }

    function getResumeState() {
      return resumeProgress[currentSection]?.[currentTopic] || null;
    }

    showScreen('home');

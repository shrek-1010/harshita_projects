document.addEventListener('DOMContentLoaded', function() {
    // Initialize modules
    initNavigation();
    initSymptomChecker();
    initMedicalFAQs();
    initEmergencyGuide();
    initMedicineInfo();
    initHealthTips();
    initVoiceAssistant();
});

// Navigation functionality
function initNavigation() {
    const navButtons = document.querySelectorAll('.nav-button');
    const modules = document.querySelectorAll('.module');
    
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and modules
            navButtons.forEach(btn => btn.classList.remove('active'));
            modules.forEach(module => module.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Show corresponding module
            const targetModule = button.getAttribute('data-target');
            document.getElementById(targetModule).classList.add('active');
        });
    });
}

// Symptom Checker functionality
function initSymptomChecker() {
    const analyzeButton = document.getElementById('analyze-symptoms');
    const symptomsInput = document.getElementById('symptoms-input');
    const symptomsResults = document.getElementById('symptoms-results');
    
    analyzeButton.addEventListener('click', () => {
        const symptoms = symptomsInput.value.trim();
        
        if (symptoms.length < 3) {
            alert('Please enter more details about your symptoms.');
            return;
        }
        
        // Show loading state
        symptomsResults.innerHTML = '<p>Analyzing your symptoms...</p>';
        symptomsResults.style.display = 'block';
        
        // Simulate API call with setTimeout
        setTimeout(() => {
            const results = analyzeSymptoms(symptoms);
            displaySymptomResults(results, symptomsResults);
        }, 1500);
    });
}

// Function to analyze symptoms (AI-enhanced implementation)
function analyzeSymptoms(symptoms) {
    // This simulates an AI-powered symptom analysis system
    // In a production environment, this would connect to a medical AI API or model
    
    symptoms = symptoms.toLowerCase();
    
    // Create a structured symptom analysis system with NLP-like pattern matching
    const symptomPatterns = [
        {
            patterns: ['headache', 'head pain', 'migraine', 'head hurts'],
            conditions: [
                { name: 'Tension Headache', probability: 'High', description: 'The most common type of headache, often described as a constant ache or pressure around the head.' },
                { name: 'Migraine', probability: 'Medium', description: 'Intense pulsing or throbbing pain in one area of the head, often accompanied by nausea, sensitivity to light and sound.' },
                { name: 'Sinusitis', probability: 'Medium', description: 'Inflammation of the sinuses causing facial pain, headache, and pressure.' }
            ],
            severity: symptoms.includes('severe') || symptoms.includes('worst') ? 'high' : 'medium',
            seekHelp: 'Seek immediate medical attention if headache is sudden and severe, accompanied by fever, neck stiffness, confusion, seizure, double vision, weakness, numbness, or difficulty speaking.',
            actions: [
                'Rest in a quiet, dark room',
                'Apply a cold or warm compress to your head',
                'Take over-the-counter pain relievers if appropriate',
                'Stay hydrated',
                'Consider stress management techniques'
            ]
        },
        {
            patterns: ['fever', 'temperature', 'hot', 'chills'],
            conditions: [
                { name: 'Viral Infection', probability: 'High', description: 'A common cause of fever, including influenza, common cold, or COVID-19.' },
                { name: 'Bacterial Infection', probability: 'Medium', description: 'Includes strep throat, urinary tract infections, or bacterial pneumonia.' },
                { name: 'Inflammatory Conditions', probability: 'Low', description: 'Various inflammatory disorders can cause fever.' }
            ],
            severity: symptoms.includes('very high') || symptoms.includes('103') ? 'high' : 'medium',
            seekHelp: 'Seek medical attention if fever exceeds 103°F (39.4°C), lasts more than three days, or is accompanied by severe headache, rash, persistent vomiting, difficulty breathing, or seizures.',
            actions: [
                'Rest and get plenty of fluids',
                'Take acetaminophen or ibuprofen to reduce fever (follow package instructions)',
                'Dress in lightweight clothing',
                'Use a light blanket if experiencing chills',
                'Monitor temperature regularly'
            ]
        },
        {
            patterns: ['cough', 'coughing', 'hack', 'phlegm'],
            conditions: [
                { name: 'Common Cold', probability: 'High', description: 'Viral infection of the upper respiratory tract.' },
                { name: 'Bronchitis', probability: 'Medium', description: 'Inflammation of the lining of the bronchial tubes.' },
                { name: 'Asthma', probability: 'Medium', description: 'Chronic condition involving inflammation of the air passages.' },
                { name: 'COVID-19', probability: 'Medium', description: 'Respiratory illness caused by the SARS-CoV-2 virus.' }
            ],
            severity: (symptoms.includes('blood') || symptoms.includes('can\'t breathe') || symptoms.includes('difficult')) ? 'high' : 'medium',
            seekHelp: 'Seek medical attention if cough is severe, produces blood or thick, green-yellow phlegm, or is accompanied by shortness of breath, wheezing, fever over 101°F (38.3°C), or lasts more than 3 weeks.',
            actions: [
                'Stay hydrated',
                'Use a humidifier or take a steamy shower to loosen congestion',
                'Try honey (for adults and children over 1 year) to soothe throat',
                'Consider over-the-counter cough medications (follow package instructions)',
                'Rest with head elevated'
            ]
        },
        {
            patterns: ['breathing', 'shortness of breath', 'breath', 'breathe', 'suffocating'],
            conditions: [
                { name: 'Asthma', probability: 'High', description: 'Chronic condition involving inflammation of the air passages.' },
                { name: 'Anxiety', probability: 'Medium', description: 'Can cause rapid breathing and feeling of shortness of breath.' },
                { name: 'Pneumonia', probability: 'Medium', description: 'Infection that inflames air sacs in the lungs.' },
                { name: 'COVID-19', probability: 'Medium', description: 'Respiratory illness caused by the SARS-CoV-2 virus.' },
                { name: 'Heart Failure', probability: 'Low', description: 'Heart condition that can cause fluid buildup in the lungs.' }
            ],
            severity: 'high',
            seekHelp: 'Seek IMMEDIATE medical attention for sudden or severe shortness of breath, chest pain, blue lips or face, or high fever. These may indicate a life-threatening condition.',
            actions: [
                'Find a comfortable position (usually sitting upright) to aid breathing',
                'Try pursed-lip breathing',
                'Remove any potential triggers from your environment',
                'Use prescribed inhalers or medications if you have them',
                'Remain calm and focus on slowing your breathing'
            ]
        },
        {
            patterns: ['chest pain', 'chest', 'heart pain', 'heart attack'],
            conditions: [
                { name: 'Angina', probability: 'Medium', description: 'Reduced blood flow to the heart causing chest pain.' },
                { name: 'Heart Attack', probability: 'Medium', description: 'Occurs when blood flow to a part of the heart is blocked.' },
                { name: 'Gastroesophageal Reflux (GERD)', probability: 'Medium', description: 'Acid reflux causing heartburn and chest discomfort.' },
                { name: 'Muscle or Rib Injury', probability: 'Medium', description: 'Pain from strained chest muscles or injured ribs.' },
                { name: 'Anxiety Attack', probability: 'Medium', description: 'Can cause chest tightness and pain.' }
            ],
            severity: 'high',
            seekHelp: 'CALL EMERGENCY SERVICES (911/112) IMMEDIATELY if chest pain is crushing, squeezing, radiating to jaw or arm, or accompanied by shortness of breath, sweating, nausea, or lightheadedness. These may be signs of a heart attack requiring immediate treatment.',
            actions: [
                'Stop any physical activity',
                'Sit down and rest in a position that makes breathing comfortable',
                'Take aspirin if advised by medical professionals (for suspected heart attack)',
                'Wait for emergency services - do not drive yourself to the hospital'
            ]
        },
        {
            patterns: ['rash', 'skin', 'itchy', 'itching', 'hives'],
            conditions: [
                { name: 'Allergic Reaction', probability: 'High', description: 'Immune system response to an allergen.' },
                { name: 'Contact Dermatitis', probability: 'High', description: 'Skin reaction from contact with irritants or allergens.' },
                { name: 'Eczema', probability: 'Medium', description: 'Chronic skin condition causing itchy, inflamed skin.' },
                { name: 'Hives', probability: 'Medium', description: 'Raised, itchy welts on the skin, often due to allergies.' },
                { name: 'Psoriasis', probability: 'Low', description: 'Autoimmune condition causing scaly, itchy patches.' }
            ],
            severity: (symptoms.includes('face') || symptoms.includes('throat') || symptoms.includes('breathing')) ? 'high' : 'low',
            seekHelp: 'Seek IMMEDIATE medical attention if rash is accompanied by facial swelling, difficulty breathing, or occurs after starting a new medication. These may indicate a severe allergic reaction (anaphylaxis).',
            actions: [
                'Avoid scratching to prevent infection',
                'Apply cool, wet compresses',
                'Use over-the-counter antihistamines or topical steroids for itching',
                'Identify and avoid potential triggers',
                'Use mild, fragrance-free soap and moisturizers'
            ]
        },
        {
            patterns: ['stomach pain', 'abdominal pain', 'belly pain', 'stomach ache'],
            conditions: [
                { name: 'Gastroenteritis', probability: 'High', description: 'Inflammation of the stomach and intestines, often from infection.' },
                { name: 'Indigestion', probability: 'Medium', description: 'Discomfort from difficulty digesting food.' },
                { name: 'Irritable Bowel Syndrome', probability: 'Medium', description: 'Chronic condition affecting the large intestine.' },
                { name: 'Appendicitis', probability: 'Low', description: 'Inflammation of the appendix, requires immediate attention if suspected.' },
                { name: 'Gastric Ulcer', probability: 'Low', description: 'Open sore in the lining of the stomach.' }
            ],
            severity: (symptoms.includes('severe') || symptoms.includes('lower right') || symptoms.includes('can\'t move')) ? 'high' : 'medium',
            seekHelp: 'Seek IMMEDIATE medical attention if pain is severe, especially if it starts near the navel and shifts to the lower right abdomen (possible appendicitis), or if accompanied by fever, bloody stools, persistent vomiting, or inability to keep fluids down.',
            actions: [
                'Rest and avoid solid foods temporarily',
                'Stay hydrated with small sips of clear liquids',
                'Use a heating pad at low setting for comfort',
                'Avoid NSAIDs like ibuprofen which can irritate the stomach',
                'Try over-the-counter antacids for indigestion'
            ]
        },
        {
            patterns: ['diarrhea', 'loose stool', 'watery stool'],
            conditions: [
                { name: 'Viral Gastroenteritis', probability: 'High', description: 'Often called stomach flu, caused by various viruses.' },
                { name: 'Food Poisoning', probability: 'High', description: 'Caused by consuming contaminated food or beverages.' },
                { name: 'Bacterial Infection', probability: 'Medium', description: 'Various bacterial infections can cause diarrhea.' },
                { name: 'Food Intolerance', probability: 'Medium', description: 'Difficulty digesting certain foods, such as lactose or gluten.' },
                { name: 'Medication Side Effect', probability: 'Low', description: 'Many medications can cause diarrhea as a side effect.' }
            ],
            severity: (symptoms.includes('blood') || symptoms.includes('severe') || symptoms.includes('dehydrated')) ? 'high' : 'medium',
            seekHelp: 'Seek medical attention if diarrhea lasts more than 2 days, contains blood or pus, is accompanied by fever over 102°F (39°C), or if you have signs of dehydration (excessive thirst, dry mouth, little or no urination, severe weakness, dizziness, or lightheadedness).',
            actions: [
                'Stay hydrated with water, clear broths, or electrolyte solutions',
                'Avoid dairy, caffeine, alcohol, and high-fat or high-fiber foods',
                'Eat small, frequent meals of bland foods (BRAT diet: bananas, rice, applesauce, toast)',
                'Rest',
                'Use over-the-counter anti-diarrheal medications if appropriate (not for bacterial infections)'
            ]
        },
        {
            patterns: ['vomiting', 'throw up', 'nausea', 'sick to stomach'],
            conditions: [
                { name: 'Viral Gastroenteritis', probability: 'High', description: 'Often called stomach flu, caused by various viruses.' },
                { name: 'Food Poisoning', probability: 'High', description: 'Caused by consuming contaminated food or beverages.' },
                { name: 'Vestibular Disorders', probability: 'Medium', description: 'Problems with balance and spatial orientation.' },
                { name: 'Pregnancy', probability: 'Medium', description: 'Morning sickness in early pregnancy.' },
                { name: 'Medication Side Effect', probability: 'Medium', description: 'Many medications can cause nausea or vomiting.' }
            ],
            severity: (symptoms.includes('blood') || symptoms.includes('severe') || symptoms.includes('dehydrated') || symptoms.includes('head injury')) ? 'high' : 'medium',
            seekHelp: 'Seek medical attention if vomiting lasts more than 24 hours, contains blood or looks like coffee grounds, is accompanied by severe abdominal pain, head injury, stiff neck, confusion, or signs of dehydration (excessive thirst, dry mouth, decreased urination).',
            actions: [
                'Take small sips of clear fluids to prevent dehydration',
                'Avoid solid foods until vomiting subsides',
                'Gradually introduce bland foods once able to keep fluids down',
                'Rest',
                'Avoid strong odors, movement, or visual stimulation that triggers nausea'
            ]
        },
        {
            patterns: ['dizzy', 'dizziness', 'light headed', 'vertigo', 'spinning'],
            conditions: [
                { name: 'Inner Ear Issues', probability: 'High', description: 'Including benign paroxysmal positional vertigo (BPPV) and labyrinthitis.' },
                { name: 'Low Blood Pressure', probability: 'Medium', description: 'Especially when standing up quickly (orthostatic hypotension).' },
                { name: 'Dehydration', probability: 'Medium', description: 'Insufficient fluid intake can cause dizziness.' },
                { name: 'Anemia', probability: 'Medium', description: 'Low red blood cell count or hemoglobin levels.' },
                { name: 'Medication Side Effect', probability: 'Medium', description: 'Many medications can cause dizziness.' }
            ],
            severity: (symptoms.includes('fainting') || symptoms.includes('chest pain') || symptoms.includes('stroke') || symptoms.includes('head injury')) ? 'high' : 'medium',
            seekHelp: 'Seek IMMEDIATE medical attention if dizziness is accompanied by chest pain, shortness of breath, severe headache, slurred speech, facial drooping, weakness, numbness, difficulty walking, or following a head injury.',
            actions: [
                'Sit or lie down immediately when feeling dizzy',
                'Avoid sudden movements or position changes',
                'Stay hydrated',
                'Avoid alcohol and caffeine',
                'Move carefully and use supports like handrails when necessary'
            ]
        },
        {
            patterns: ['fatigue', 'tired', 'exhausted', 'no energy', 'weakness'],
            conditions: [
                { name: 'Sleep Deprivation', probability: 'High', description: 'Not getting enough quality sleep.' },
                { name: 'Anemia', probability: 'Medium', description: 'Low red blood cell count or hemoglobin levels.' },
                { name: 'Depression', probability: 'Medium', description: 'Mood disorder causing persistent feelings of sadness and loss of interest.' },
                { name: 'Hypothyroidism', probability: 'Medium', description: 'Underactive thyroid gland.' },
                { name: 'Chronic Fatigue Syndrome', probability: 'Low', description: 'Complex disorder characterized by extreme fatigue without clear cause.' }
            ],
            severity: 'medium',
            seekHelp: 'Consult a healthcare provider if fatigue is severe, persists for more than two weeks, or is accompanied by unexplained weight loss, fever, pain, or other concerning symptoms.',
            actions: [
                'Establish a regular sleep schedule',
                'Stay physically active with moderate exercise',
                'Eat a balanced diet rich in fruits, vegetables, lean proteins, and whole grains',
                'Stay hydrated',
                'Manage stress through relaxation techniques'
            ]
        },
        {
            patterns: ['sore throat', 'throat pain', 'difficulty swallowing', 'painful swallowing'],
            conditions: [
                { name: 'Viral Infection', probability: 'High', description: 'Common cold, flu, or mononucleosis.' },
                { name: 'Strep Throat', probability: 'Medium', description: 'Bacterial infection requiring antibiotic treatment.' },
                { name: 'Allergies', probability: 'Medium', description: 'Allergic reactions can cause throat irritation.' },
                { name: 'Acid Reflux', probability: 'Medium', description: 'Stomach acid flowing back into the esophagus.' },
                { name: 'Tonsillitis', probability: 'Medium', description: 'Inflammation of the tonsils.' }
            ],
            severity: (symptoms.includes('severe') || symptoms.includes('can\'t swallow') || symptoms.includes('can\'t breathe')) ? 'high' : 'medium',
            seekHelp: 'Seek medical attention if sore throat is severe, lasts longer than a week, is accompanied by difficulty breathing or swallowing, unusual drooling, joint pain, earache, rash, or fever over 101°F (38.3°C).',
            actions: [
                'Gargle with warm salt water (1/4 to 1/2 teaspoon salt in 8 oz water)',
                'Drink warm liquids like tea with honey',
                'Use throat lozenges or sprays (as appropriate for age)',
                'Stay hydrated',
                'Rest your voice'
            ]
        },
        {
            patterns: ['back pain', 'backache', 'spine', 'lower back'],
            conditions: [
                { name: 'Muscle Strain', probability: 'High', description: 'Overuse or injury to back muscles or ligaments.' },
                { name: 'Sciatica', probability: 'Medium', description: 'Compression of the sciatic nerve causing radiating pain.' },
                { name: 'Herniated Disc', probability: 'Medium', description: 'When a spinal disc bulges or ruptures, pressing on nerves.' },
                { name: 'Arthritis', probability: 'Medium', description: 'Inflammation of the joints in the spine.' },
                { name: 'Kidney Infection', probability: 'Low', description: 'Infection can cause pain in the back or side.' }
            ],
            severity: (symptoms.includes('severe') || symptoms.includes('numbness') || symptoms.includes('bladder') || symptoms.includes('bowel')) ? 'high' : 'medium',
            seekHelp: 'Seek IMMEDIATE medical attention if back pain follows an injury, is accompanied by fever, causes numbness/tingling in legs, spreads down one or both legs, causes weakness, or is associated with bladder or bowel control problems.',
            actions: [
                'Apply ice for the first 48-72 hours, then switch to heat',
                'Take over-the-counter pain relievers if appropriate',
                'Maintain light activity - avoid complete bed rest but also avoid activities that aggravate pain',
                'Use proper lifting techniques and maintain good posture',
                'Consider gentle stretching once acute pain subsides'
            ]
        },
        {
            patterns: ['joint pain', 'arthritis', 'joint', 'knees', 'elbows', 'fingers'],
            conditions: [
                { name: 'Osteoarthritis', probability: 'High', description: 'Degenerative joint disease involving wearing of cartilage.' },
                { name: 'Rheumatoid Arthritis', probability: 'Medium', description: 'Autoimmune disorder causing joint inflammation.' },
                { name: 'Gout', probability: 'Medium', description: 'Type of inflammatory arthritis caused by uric acid crystals in joints.' },
                { name: 'Bursitis', probability: 'Medium', description: 'Inflammation of the fluid-filled sacs that cushion joints.' },
                { name: 'Tendinitis', probability: 'Medium', description: 'Inflammation of tendons that connect muscle to bone.' }
            ],
            severity: (symptoms.includes('severe') || symptoms.includes('fever') || symptoms.includes('red') || symptoms.includes('hot')) ? 'high' : 'medium',
            seekHelp: 'Seek medical attention if joint pain is severe, accompanied by sudden swelling, joint appears red or hot, follows an injury, or if you experience fever, unexplained weight loss, or inability to use the joint.',
            actions: [
                'Rest the affected joint',
                'Apply ice to reduce inflammation',
                'Use over-the-counter anti-inflammatory medications if appropriate',
                'Consider supportive devices like braces if needed',
                'Maintain gentle movement without overexertion'
            ]
        }
    ];

    // Process the input to find matching symptoms
    let matchedPatterns = [];
    
    // Find all matching symptom patterns
    symptomPatterns.forEach(pattern => {
        for (const keyword of pattern.patterns) {
            if (symptoms.includes(keyword)) {
                matchedPatterns.push(pattern);
                break; // Once we find a match in this pattern group, move to next group
            }
        }
    });
    
    // If no patterns match, provide a generic response
    if (matchedPatterns.length === 0) {
        return {
            possibleConditions: [
                { name: 'Multiple conditions possible', probability: 'Uncertain', description: 'Your symptoms need more detailed analysis. Our AI system cannot determine specific conditions based on the information provided.' }
            ],
            severity: 'unknown',
            seekHelp: 'If you are experiencing concerning symptoms, please consult with a healthcare professional for proper evaluation and diagnosis. They can provide personalized medical advice based on a complete examination.',
            actions: [
                'Document your symptoms including when they started, severity, and any factors that make them better or worse',
                'Note any recent changes in medications, diet, or activities',
                'Consider keeping a symptom diary to share with your healthcare provider',
                'If symptoms worsen or persist, schedule an appointment with a healthcare professional',
                'Avoid self-diagnosing or self-medicating without proper medical guidance'
            ]
        };
    }
    
    // Determine overall severity (highest of all matched patterns)
    let overallSeverity = 'low';
    if (matchedPatterns.some(pattern => pattern.severity === 'high')) {
        overallSeverity = 'high';
    } else if (matchedPatterns.some(pattern => pattern.severity === 'medium')) {
        overallSeverity = 'medium';
    }
    
    // Collect all possible conditions from matched patterns, with priorities
    let allConditions = [];
    let allActions = new Set();
    let seekHelpMessages = [];
    
    matchedPatterns.forEach(pattern => {
        // Add conditions with boosted probability based on multiple symptom matches
        pattern.conditions.forEach(condition => {
            // Check if this condition is already in our list
            const existingCondition = allConditions.find(c => c.name === condition.name);
            
            if (existingCondition) {
                // Boost probability if already present
                if (condition.probability === 'High' || existingCondition.probability === 'High') {
                    existingCondition.probability = 'High';
                } else if (condition.probability === 'Medium' || existingCondition.probability === 'Medium') {
                    existingCondition.probability = 'Medium';
                }
            } else {
                // Add new condition
                allConditions.push({ ...condition });
            }
        });
        
        // Collect actions
        pattern.actions.forEach(action => allActions.add(action));
        
        // Collect seekHelp messages, prioritizing high severity ones
        if (pattern.severity === 'high') {
            seekHelpMessages.unshift(pattern.seekHelp);
        } else {
            seekHelpMessages.push(pattern.seekHelp);
        }
    });
    
    // Sort conditions by probability
    allConditions.sort((a, b) => {
        const probOrder = { 'High': 3, 'Medium': 2, 'Low': 1, 'Uncertain': 0 };
        return probOrder[b.probability] - probOrder[a.probability];
    });
    
    // Limit to top conditions
    allConditions = allConditions.slice(0, 5);
    
    // Combine seek help messages, prioritizing the most severe
    let seekHelpMessage = seekHelpMessages[0];
    if (seekHelpMessages.length > 1) {
        seekHelpMessage += ' ' + (overallSeverity === 'high' ? 'Additionally, ' : '') + 
                         'monitor your condition closely and seek medical advice if symptoms persist or worsen.';
    }
    
    return {
        possibleConditions: allConditions,
        severity: overallSeverity,
        seekHelp: seekHelpMessage,
        actions: Array.from(allActions).slice(0, 6) // Limit to top 6 actions
    };
}

// Function to display symptom analysis results
function displaySymptomResults(results, container) {
    // Clear previous results
    container.innerHTML = '';
    
    // Create header for possible conditions
    const conditionsHeader = document.createElement('h3');
    conditionsHeader.textContent = 'Possible Conditions:';
    container.appendChild(conditionsHeader);
    
    // Create and append condition list
    const conditionsList = document.createElement('div');
    conditionsList.className = 'conditions-list';
    
    results.possibleConditions.forEach(condition => {
        const conditionItem = document.createElement('div');
        conditionItem.className = 'result-item';
        
        const nameEl = document.createElement('h4');
        nameEl.textContent = condition.name;
        
        const probabilityEl = document.createElement('span');
        probabilityEl.className = `severity ${condition.probability.toLowerCase()}`;
        probabilityEl.textContent = condition.probability;
        
        const descriptionEl = document.createElement('p');
        descriptionEl.textContent = condition.description;
        
        conditionItem.appendChild(nameEl);
        nameEl.appendChild(document.createTextNode(' '));
        nameEl.appendChild(probabilityEl);
        conditionItem.appendChild(descriptionEl);
        
        conditionsList.appendChild(conditionItem);
    });
    
    container.appendChild(conditionsList);
    
    // Create and append seek help section
    const seekHelpDiv = document.createElement('div');
    seekHelpDiv.className = 'when-to-seek-help';
    
    const seekHelpHeader = document.createElement('h4');
    seekHelpHeader.innerHTML = '<i class="fas fa-exclamation-circle"></i> When to Seek Medical Help:';
    
    const seekHelpText = document.createElement('p');
    seekHelpText.textContent = results.seekHelp;
    
    seekHelpDiv.appendChild(seekHelpHeader);
    seekHelpDiv.appendChild(seekHelpText);
    container.appendChild(seekHelpDiv);
    
    // Create and append suggested actions
    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'suggested-actions';
    
    const actionsHeader = document.createElement('h4');
    actionsHeader.innerHTML = '<i class="fas fa-clipboard-list"></i> Suggested Actions:';
    
    const actionsList = document.createElement('ul');
    results.actions.forEach(action => {
        const actionItem = document.createElement('li');
        actionItem.textContent = action;
        actionsList.appendChild(actionItem);
    });
    
    actionsDiv.appendChild(actionsHeader);
    actionsDiv.appendChild(actionsList);
    container.appendChild(actionsDiv);
    
    // Display severity notice
    const severityDiv = document.createElement('div');
    severityDiv.className = 'severity-notice';
    
    let severityIcon, severityText;
    switch(results.severity) {
        case 'high':
            severityIcon = 'fa-exclamation-triangle';
            severityText = 'This condition may require urgent medical attention.';
            break;
        case 'medium':
            severityIcon = 'fa-exclamation-circle';
            severityText = 'Monitor these symptoms closely.';
            break;
        case 'low':
            severityIcon = 'fa-info-circle';
            severityText = 'These symptoms are typically manageable with self-care.';
            break;
        default:
            severityIcon = 'fa-question-circle';
            severityText = 'Severity is difficult to determine from the provided information.';
    }
    
    severityDiv.innerHTML = `<p><i class="fas ${severityIcon}"></i> ${severityText}</p>`;
    container.appendChild(severityDiv);
    
    // Add disclaimer
    const disclaimer = document.createElement('p');
    disclaimer.className = 'medical-disclaimer';
    disclaimer.innerHTML = '<small><strong>Note:</strong> This analysis is not a medical diagnosis. Always consult with a healthcare professional for proper evaluation.</small>';
    container.appendChild(disclaimer);
}

// Medical FAQs functionality
function initMedicalFAQs() {
    const searchButton = document.getElementById('search-faq');
    const faqInput = document.getElementById('faq-search');
    const faqResults = document.getElementById('faq-results');
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    // Search button event listener
    searchButton.addEventListener('click', () => {
        const query = faqInput.value.trim();
        
        if (query.length < 3) {
            alert('Please enter a valid medical question.');
            return;
        }
        
        // Show loading state
        faqResults.innerHTML = '<p>Searching medical knowledge base...</p>';
        faqResults.style.display = 'block';
        
        // Simulate API call
        setTimeout(() => {
            const answer = getMedicalFAQAnswer(query);
            displayFAQAnswer(answer, faqResults);
        }, 1000);
    });
    
    // Common question click events
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            faqInput.value = question.textContent;
            searchButton.click();
        });
    });
}

// Function to get medical FAQ answers (improved AI implementation)
function getMedicalFAQAnswer(query) {
    query = query.toLowerCase();
    
    // Create a more comprehensive knowledge base with NLP-like pattern matching
    const faqDatabase = [
        {
            patterns: ['covid', 'coronavirus', 'covid-19', 'covid19', 'sars-cov-2'],
            question: 'What are the symptoms of COVID-19?',
            answer: 'Common symptoms of COVID-19 include fever, dry cough, fatigue, loss of taste or smell, body aches, headache, sore throat, shortness of breath, and gastrointestinal symptoms like nausea or diarrhea. Symptoms typically appear 2-14 days after exposure to the virus. New variants may present with slightly different symptom patterns. COVID-19 severity ranges from mild to severe, with some people experiencing no symptoms (asymptomatic cases).',
            source: 'World Health Organization (WHO)',
            sourceUrl: 'https://www.who.int/health-topics/coronavirus'
        },
        {
            patterns: ['blood pressure', 'hypertension', 'high blood pressure', 'lower blood pressure'],
            question: 'How to lower blood pressure naturally?',
            answer: 'Natural ways to lower blood pressure include: 1) Regular physical activity (150 minutes per week), 2) Reducing sodium intake (<2,300mg daily), 3) Following the DASH diet rich in fruits, vegetables, and low-fat dairy, 4) Limiting alcohol consumption, 5) Quitting smoking, 6) Managing stress through meditation or deep breathing, 7) Maintaining a healthy weight, 8) Ensuring adequate sleep (7-8 hours nightly), 9) Increasing potassium intake through foods like bananas and potatoes, 10) Considering supplements like CoQ10, garlic, or omega-3 fatty acids (consult healthcare provider first).',
            source: 'American Heart Association',
            sourceUrl: 'https://www.heart.org/en/health-topics/high-blood-pressure'
        },
        {
            patterns: ['migraine', 'headache', 'head pain', 'migraine headache'],
            question: 'What causes migraines?',
            answer: 'Migraines are complex neurological conditions with multiple potential triggers and causes. Common triggers include stress, hormonal changes, certain foods (aged cheese, alcohol, caffeine), skipped meals, sleep disruptions, bright lights, strong smells, and weather changes. Genetics play a significant role, as migraines tend to run in families. The exact mechanism involves abnormal brain activity affecting nerve signals, chemicals, and blood vessels. Some people experience "aura" symptoms before a migraine (visual disturbances, numbness). Migraines are more common in women and may change in frequency and severity throughout life.',
            source: 'American Migraine Foundation',
            sourceUrl: 'https://americanmigrainefoundation.org/resource-library/understanding-migraine/'
        },
        {
            patterns: ['diabetes', 'blood sugar', 'type 1 diabetes', 'type 2 diabetes', 'diabetes management', 'diabetes mellitus'],
            question: 'How to manage diabetes?',
            answer: 'Effective diabetes management includes: 1) Monitoring blood glucose regularly, 2) Taking medications as prescribed (insulin for Type 1, potentially various medications for Type 2), 3) Following a balanced diet with controlled carbohydrate intake, 4) Regular physical activity (at least 150 minutes per week), 5) Maintaining a healthy weight, 6) Regular medical check-ups (every 3-6 months), 7) Monitoring for complications (eye, kidney, nerve, cardiovascular), 8) Stress management, 9) Adequate sleep, 10) Education about the condition. Type 1 requires insulin therapy. Type 2 may be managed with lifestyle changes and/or medication. Continuous glucose monitors and insulin pumps may help some patients. A team approach involving doctors, diabetes educators, dietitians, and other specialists is often best.',
            source: 'American Diabetes Association',
            sourceUrl: 'https://www.diabetes.org/diabetes'
        },
        {
            patterns: ['cancer', 'carcinoma', 'tumor', 'malignant', 'oncology', 'chemotherapy', 'radiation therapy'],
            question: 'What are common cancer warning signs?',
            answer: 'Common cancer warning signs include: 1) Unexplained weight loss, 2) Fatigue that doesn\'t improve with rest, 3) Skin changes (darkening, yellowing, redness, itching, or excessive hair growth), 4) Sores that don\'t heal, 5) Unusual bleeding or discharge, 6) Thickening or lump in breast, testicle, or elsewhere, 7) Indigestion or trouble swallowing, 8) Changes in bowel or bladder habits, 9) Persistent cough or hoarseness, 10) Persistent pain in a specific area. Early detection significantly improves treatment outcomes, so it\'s essential to consult a healthcare provider promptly if experiencing these symptoms. Different cancer types may present with specific symptoms, and regular screening tests are recommended based on age, gender, and risk factors.',
            source: 'National Cancer Institute',
            sourceUrl: 'https://www.cancer.gov/about-cancer/causes-prevention/risk/myths'
        },
        {
            patterns: ['allergy', 'allergic', 'allergies', 'allergen', 'allergic reaction', 'anaphylaxis'],
            question: 'What are common allergies and their symptoms?',
            answer: 'Common allergies include: 1) Seasonal/environmental (pollen, dust mites, pet dander, mold) causing sneezing, runny nose, itchy eyes, and congestion; 2) Food allergies (nuts, shellfish, eggs, milk, wheat, soy) causing hives, swelling, digestive issues, or anaphylaxis; 3) Medication allergies causing rash, hives, or anaphylaxis; 4) Insect sting allergies causing localized swelling or anaphylaxis; 5) Latex allergies causing skin rash or respiratory symptoms. Symptoms range from mild (sneezing, itching) to severe, life-threatening anaphylaxis (difficulty breathing, drop in blood pressure, loss of consciousness). Anaphylaxis requires immediate emergency treatment with epinephrine (EpiPen). Allergies are diagnosed through skin tests, blood tests, and elimination diets, and managed with avoidance strategies, medications, and sometimes immunotherapy.',
            source: 'American Academy of Allergy, Asthma & Immunology',
            sourceUrl: 'https://www.aaaai.org/conditions-treatments/allergies'
        },
        {
            patterns: ['pregnancy', 'pregnant', 'conception', 'fertility', 'prenatal'],
            question: 'What are early signs of pregnancy?',
            answer: 'Early signs of pregnancy include: 1) Missed period, 2) Tender, swollen breasts, 3) Nausea/morning sickness, 4) Increased urination, 5) Fatigue, 6) Food aversions or cravings, 7) Slight bleeding (implantation bleeding), 8) Bloating, 9) Mood swings, 10) Mild cramping, 11) Constipation, 12) Higher basal body temperature, 13) Nasal congestion. Symptoms vary widely between individuals and pregnancies. Some women experience many symptoms, while others have few or none. Home pregnancy tests can typically detect pregnancy from the first day of a missed period. For accurate confirmation, consult a healthcare provider for a blood test and prenatal care. First prenatal visit is usually recommended at 8 weeks from the last menstrual period.',
            source: 'American College of Obstetricians and Gynecologists',
            sourceUrl: 'https://www.acog.org/womens-health/faqs/pregnancy'
        },
        {
            patterns: ['heart attack', 'cardiac arrest', 'myocardial infarction', 'heart disease', 'cardiovascular'],
            question: 'What are the warning signs of a heart attack?',
            answer: 'Warning signs of a heart attack include: 1) Chest pain or discomfort (feeling of pressure, squeezing, fullness, or pain in the center or left side of the chest that lasts more than a few minutes or comes and goes), 2) Discomfort in other upper body areas (one or both arms, back, neck, jaw, or stomach), 3) Shortness of breath (with or without chest discomfort), 4) Cold sweat, 5) Nausea or vomiting, 6) Lightheadedness. Women are more likely than men to experience atypical symptoms like back or jaw pain, shortness of breath, and nausea/vomiting. If you suspect a heart attack, call emergency services (911) immediately - every minute matters. While waiting for help, chew an aspirin (if not allergic) and remain as calm as possible. Heart attack symptoms may develop suddenly or gradually over hours, days, or weeks.',
            source: 'American Heart Association',
            sourceUrl: 'https://www.heart.org/en/health-topics/heart-attack/warning-signs-of-a-heart-attack'
        },
        {
            patterns: ['mental health', 'depression', 'anxiety', 'stress', 'psychological', 'mental illness'],
            question: 'How to improve mental health and wellbeing?',
            answer: 'Strategies to improve mental health include: 1) Regular physical activity (releases endorphins and reduces stress), 2) Adequate sleep (7-9 hours for adults), 3) Balanced nutrition (Mediterranean diet pattern shows benefits), 4) Mindfulness and meditation practice, 5) Social connection and maintaining relationships, 6) Setting realistic goals and boundaries, 7) Limiting alcohol and avoiding drugs, 8) Seeking professional help when needed (therapy, medication), 9) Developing stress management techniques (deep breathing, progressive muscle relaxation), 10) Engaging in meaningful activities and hobbies, 11) Spending time in nature, 12) Practicing gratitude and positive thinking, 13) Limiting social media and news consumption if overwhelming. Mental health is equally important as physical health. Professional help should be sought for persistent symptoms that interfere with daily functioning. Many effective treatments exist for mental health conditions.',
            source: 'National Institute of Mental Health',
            sourceUrl: 'https://www.nimh.nih.gov/health/topics/caring-for-your-mental-health'
        },
        {
            patterns: ['stroke', 'brain attack', 'cerebrovascular accident', 'cva', 'tia', 'transient ischemic attack'],
            question: 'What are the signs of stroke and what should I do?',
            answer: 'Remember the acronym FAST for stroke signs: F - Face drooping (one side of face droops or is numb), A - Arm weakness (one arm drifts downward when both are raised), S - Speech difficulty (slurred speech, inability to speak, or difficulty understanding speech), T - Time to call emergency services (911) immediately if you observe any of these signs. Additional signs include: sudden numbness or weakness on one side of the body, sudden confusion, trouble seeing in one or both eyes, sudden severe headache without known cause, sudden trouble walking, dizziness, or loss of balance/coordination. Immediate action is crucial - stroke treatment is time-sensitive, and "time is brain." Note the time symptoms first appeared, do not drive yourself to the hospital, and do not give the person medication, food, or drinks.',
            source: 'American Stroke Association',
            sourceUrl: 'https://www.stroke.org/en/about-stroke/stroke-symptoms'
        },
        {
            patterns: ['vaccine', 'vaccination', 'immunization', 'shots', 'vaccine safety'],
            question: 'Are vaccines safe and why are they important?',
            answer: 'Vaccines are among the safest and most effective public health interventions available. They undergo rigorous testing for safety and efficacy before approval, and continued monitoring afterward. Vaccines work by training the immune system to recognize and fight specific infectious agents, preventing disease before it occurs. They are important because: 1) They prevent serious, potentially life-threatening diseases, 2) They protect vulnerable populations who cannot be vaccinated, 3) They prevent disease spread in communities (herd immunity), 4) They have eradicated or dramatically reduced many deadly diseases (smallpox, polio, etc.), 5) They are cost-effective compared to treating diseases. Like any medication, vaccines can cause side effects, but serious reactions are extremely rare (generally less than one in a million doses). The benefits of vaccination far outweigh the potential risks for almost all individuals. Consult with healthcare providers about specific vaccines recommended based on age, health status, and risk factors.',
            source: 'Centers for Disease Control and Prevention',
            sourceUrl: 'https://www.cdc.gov/vaccinesafety/index.html'
        }
    ];
    
    // Process the input query to find matching patterns
    let bestMatch = null;
    let maxPatternMatches = 0;
    
    for (const faqItem of faqDatabase) {
        let patternMatches = 0;
        
        // Count how many patterns from this item match the query
        for (const pattern of faqItem.patterns) {
            if (query.includes(pattern)) {
                patternMatches++;
            }
        }
        
        // If this item has more matching patterns than our current best match, update the best match
        if (patternMatches > maxPatternMatches) {
            maxPatternMatches = patternMatches;
            bestMatch = faqItem;
        }
    }
    
    // If no specific match found, provide a general response based on the query
    if (!bestMatch) {
        // Attempt to provide a relevant response using keyword extraction
        const commonMedicalTerms = [
            { term: 'pain', response: 'pain management and relief' },
            { term: 'diet', response: 'nutrition and healthy eating' },
            { term: 'exercise', response: 'physical activity and fitness' },
            { term: 'sleep', response: 'sleep health and disorders' },
            { term: 'cold', response: 'common cold and respiratory infections' },
            { term: 'fever', response: 'fever causes and management' },
            { term: 'vitamin', response: 'vitamins, minerals and supplements' },
            { term: 'weight', response: 'weight management' },
            { term: 'skin', response: 'skin conditions and dermatology' }
        ];
        
        let generalTopic = null;
        for (const term of commonMedicalTerms) {
            if (query.includes(term.term)) {
                generalTopic = term.response;
                break;
            }
        }
        
        return {
            question: `Information about "${query}"`,
            answer: `I don't have specific information about this exact query in my knowledge base. ${generalTopic ? `Your question seems to be related to ${generalTopic}. ` : ''}For accurate medical information on this topic, I recommend consulting reputable sources such as the CDC, WHO, Mayo Clinic, or Cleveland Clinic websites, or speaking with a healthcare professional. Please remember that medical information should be personalized to your specific situation by a qualified healthcare provider.`,
            source: 'General Medical Guidance',
            sourceUrl: ''
        };
    }
    
    return {
        question: bestMatch.question,
        answer: bestMatch.answer,
        source: bestMatch.source,
        sourceUrl: bestMatch.sourceUrl
    };
}

// Function to display FAQ answers
function displayFAQAnswer(answer, container) {
    // Clear previous results
    container.innerHTML = '';
    
    // Create question heading
    const questionEl = document.createElement('h3');
    questionEl.textContent = answer.question;
    container.appendChild(questionEl);
    
    // Create answer paragraph
    const answerEl = document.createElement('p');
    answerEl.textContent = answer.answer;
    container.appendChild(answerEl);
    
    // Create source citation if available
    if (answer.source) {
        const sourceEl = document.createElement('div');
        sourceEl.className = 'source-citation';
        
        if (answer.sourceUrl) {
            sourceEl.innerHTML = `<small><strong>Source:</strong> <a href="${answer.sourceUrl}" target="_blank">${answer.source}</a></small>`;
        } else {
            sourceEl.innerHTML = `<small><strong>Source:</strong> ${answer.source}</small>`;
        }
        
        container.appendChild(sourceEl);
    }
    
    // Add disclaimer
    const disclaimer = document.createElement('p');
    disclaimer.className = 'medical-disclaimer';
    disclaimer.innerHTML = '<small><strong>Note:</strong> This information is for educational purposes only and is not a substitute for professional medical advice.</small>';
    container.appendChild(disclaimer);
}

// Emergency First-Aid Guide functionality
function initEmergencyGuide() {
    const emergencyCards = document.querySelectorAll('.emergency-card');
    const emergencyResults = document.getElementById('emergency-results');
    
    emergencyCards.forEach(card => {
        card.addEventListener('click', () => {
            const emergency = card.getAttribute('data-emergency');
            
            // Show loading state
            emergencyResults.innerHTML = '<p>Loading emergency instructions...</p>';
            emergencyResults.style.display = 'block';
            
            // Simulate API call
            setTimeout(() => {
                const instructions = getEmergencyInstructions(emergency);
                displayEmergencyInstructions(instructions, emergencyResults);
            }, 800);
        });
    });
}

// Function to get emergency instructions (enhanced AI implementation)
function getEmergencyInstructions(emergencyType) {
    const emergencyDatabase = {
        'heart_attack': {
            title: 'Heart Attack First Aid',
            description: 'A heart attack occurs when blood flow to the heart muscle is blocked, causing damage to the heart tissue. Immediate medical attention is crucial.',
            steps: [
                'Call 911 immediately',
                'Have the person sit down and rest',
                'If prescribed, help the person take their nitroglycerin as directed',
                'If the person becomes unconscious, check for breathing and pulse',
                'If there\'s no breathing or pulse, begin CPR and use an AED if available',
                'Stay with the person until emergency services arrive'
            ],
            do: [
                'Call 911 even if symptoms seem mild or you\'re unsure',
                'Have the person stay as still as possible',
                'Monitor the person\'s condition and be prepared to perform CPR if needed',
                'Be calm and reassuring to reduce anxiety'
            ],
            dont: [
                'Don\'t wait to see if symptoms go away',
                'Don\'t let the person drive themselves to the hospital',
                'Don\'t give the person anything except aspirin (unless they have medications prescribed for this purpose)',
                'Don\'t give the person a cough medicine with codeine or other painkillers except aspirin'
            ],
            callEmergency: true,
            videoLink: 'https://www.youtube.com/watch?v=gDwt7dD3awc'
        },
        'stroke': {
            title: 'Stroke First Aid',
            description: 'A stroke occurs when blood flow to part of the brain is interrupted, causing brain cell death. Immediate treatment is crucial to minimize brain damage and potential complications.',
            steps: [
                'Recognize the signs using the FAST method: Face drooping, Arm weakness, Speech difficulties, Time to call 911',
                'Note the time when symptoms first appeared (this is critical for treatment decisions)',
                'Call 911 immediately',
                'Stay with the person and monitor their condition until emergency services arrive'
            ],
            do: [
                'Act FAST - every minute counts in treating stroke',
                'Keep the person calm and still',
                'Keep track of symptoms and when they began',
                'Remove any dentures, food, or vomit from the mouth to prevent choking'
            ],
            dont: [
                'Don\'t give the person anything to eat or drink',
                'Don\'t let the person go to sleep or dismiss their symptoms',
                'Don\'t give them aspirin, as some strokes are caused by bleeding in the brain',
                'Don\'t wait to see if symptoms improve or disappear'
            ],
            callEmergency: true,
            videoLink: 'https://www.youtube.com/watch?v=ye-KXcDV15o'
        },
        'poisoning': {
            title: 'Poisoning First Aid',
            description: 'Poisoning can occur through ingestion, inhalation, absorption through skin, or injection. Different poisons require different treatments, so getting professional advice quickly is essential.',
            steps: [
                'Ensure your safety first (don\'t risk becoming poisoned yourself)',
                'Call your local poison control center (1-800-222-1222 in the US) or 911 immediately',
                'Have ready: the person\'s age, weight, any health conditions, the substance involved, time of exposure, and symptoms',
                'For ingested poison: Do not induce vomiting or give anything to drink unless specifically instructed by poison control',
                'For poison on the skin: Remove contaminated clothing and rinse skin with running water for 15-20 minutes',
                'For poison in the eye: Flush the eye with lukewarm water for 15-20 minutes',
                'For inhaled poison: Get the person to fresh air immediately',
                'Collect the poison container or substance sample to help identify it (if safe to do so)'
            ],
            do: [
                'Call for professional help immediately before taking action',
                'Follow the exact instructions given by poison control or emergency services',
                'Keep a list of emergency numbers near your phone including poison control',
                'If the person vomits, turn their head to the side to prevent choking'
            ],
            dont: [
                'Don\'t try to neutralize a poison with lemon juice, vinegar, or other substances',
                'Don\'t induce vomiting unless specifically instructed by a medical professional',
                'Don\'t give salt water, ipecac syrup, or activated charcoal unless directed by poison control',
                'Don\'t wait for symptoms to develop before getting help'
            ],
            callEmergency: true,
            videoLink: 'https://www.youtube.com/watch?v=mq0GkEcKn8M'
        },
        'seizure': {
            title: 'Seizure First Aid',
            description: 'A seizure is a sudden, uncontrolled electrical disturbance in the brain. Most seizures last from 30 seconds to 2 minutes and don\'t cause permanent damage, but they can be frightening to witness.',
            steps: [
                'Stay calm and note the time the seizure starts',
                'Clear the area around the person to prevent injury',
                'Let the person rest or sleep after the seizure if they need to'
            ],
            do: [
                'Time the seizure - if it lasts more than 5 minutes, call 911',
                'Protect the person from injury by moving dangerous objects away',
                'Stay with the person until they are fully alert and oriented',
                'If this is a first-time seizure, seek medical attention even if the seizure stops'
            ],
            dont: [
                'Don\'t hold the person down or try to stop their movements',
                'Don\'t put anything in the person\'s mouth, including your fingers',
                'Don\'t give the person water, pills, or food until they are fully alert',
                'Don\'t leave the person alone after a seizure'
            ],
            callEmergency: 'Call 911 if: the seizure lasts more than 5 minutes, the person doesn\'t wake up after the seizure, the person has another seizure shortly after the first, the person is injured during the seizure, the person has breathing difficulties, the seizure occurs in water, the person is pregnant or has diabetes, or this is their first seizure',
            videoLink: 'https://www.youtube.com/watch?v=5AKfWrH4NKk'
        },
        'allergic_reaction': {
            title: 'Severe Allergic Reaction (Anaphylaxis) First Aid',
            description: 'Anaphylaxis is a severe, potentially life-threatening allergic reaction that can occur within seconds or minutes of exposure to an allergen. It requires immediate emergency treatment.',
            steps: [
                'Check for signs of anaphylaxis: hives, swelling (especially face, lips, tongue), difficulty breathing, wheezing, dizziness, fainting, rapid heartbeat, nausea, vomiting',
                'Call 911 immediately if you suspect anaphylaxis',
                'Ask if the person has an epinephrine auto-injector (EpiPen, Auvi-Q, etc.)',
                'Monitor the person\'s breathing and circulation and perform CPR if needed'
            ],
            do: [
                'Act quickly - anaphylaxis can be fatal without prompt treatment',
                'Administer epinephrine immediately if available',
                'Call 911 even if symptoms improve after epinephrine',
                'Loosen tight clothing and cover them with a blanket if they feel cold'
            ],
            dont: [
                'Don\'t wait to see if symptoms go away on their own',
                'Don\'t have the person stand or walk',
                'Don\'t give oral medications if the person is having difficulty breathing',
                'Don\'t delay transport to the hospital after administering epinephrine'
            ],
            callEmergency: true,
            videoLink: 'https://www.youtube.com/watch?v=EQbR6PdBZoY'
        },
        'heat_stroke': {
            title: 'Heat Stroke First Aid',
            description: 'Heat stroke is a severe condition caused by the body overheating, usually as a result of prolonged exposure to high temperatures. It requires immediate emergency treatment as it can damage the brain and other vital organs.',
            steps: [
                'Call 911 immediately - heat stroke is a medical emergency',
                'Move the person to a cool, shaded area',
                'Remove excess clothing and cool the person rapidly',
                'Continue monitoring vital signs until emergency services arrive'
            ],
            do: [
                'Act quickly - heat stroke can cause permanent damage or death if not treated promptly',
                'Focus on rapid cooling methods',
                'Continue cooling efforts until emergency services arrive',
                'Monitor for signs of shock'
            ],
            dont: [
                'Don\'t give aspirin or acetaminophen to reduce temperature (these medications won\'t help and may be harmful)',
                'Don\'t give alcohol or caffeine',
                'Don\'t immerse a person with heat stroke in ice water (can cause rapid temperature changes)',
                'Don\'t let the person exert themselves, even if they say they feel better'
            ],
            callEmergency: true,
            videoLink: 'https://www.youtube.com/watch?v=SKOlnvCwxeI'
        },
        'hypothermia': {
            title: 'Hypothermia First Aid',
            description: 'Hypothermia occurs when the body loses heat faster than it can produce it, causing a dangerously low body temperature (below 95°F or 35°C). It can be life-threatening if not treated promptly.',
            steps: [
                'Call 911 for moderate to severe hypothermia',
                'Move the person out of the cold environment to a warm, dry location',
                'Handle the person gently and minimize their movement',
                'Monitor breathing and be prepared to perform CPR if necessary'
            ],
            do: [
                'Handle the person gently',
                'Warm the core body first, not the extremities',
                'Use indirect, gradual warming methods',
                'Monitor the person closely until medical help arrives'
            ],
            dont: [
                'Don\'t warm the person too quickly (no hot water immersion or heating pads)',
                'Don\'t massage or rub the person\'s limbs',
                'Don\'t give alcoholic beverages',
                'Don\'t try to warm someone with severe hypothermia outside of a medical facility'
            ],
            callEmergency: true,
            videoLink: 'https://www.youtube.com/watch?v=9DoCInFMD6c'
        },
        'default': {
            title: 'Emergency Instructions',
            description: 'General guidelines for medical emergencies. Remember that in any emergency, staying calm and calling for professional help are the most important first steps.',
            steps: [
                'Assess the situation and ensure your own safety first',
                'Check the person\'s responsiveness (tap and shout "Are you OK?")',
                'Call 911 for any serious medical emergency',
                'Stay with the person until help arrives'
            ],
            do: [
                'Stay calm and reassure the injured person',
                'Gather information about what happened',
                'Provide clear information to emergency services',
                'Look for a medical ID bracelet or necklace that might provide important information'
            ],
            dont: [
                'Don\'t put yourself in danger',
                'Don\'t move an injured person unless absolutely necessary',
                'Don\'t give food or water in many emergency situations',
                'Don\'t leave the person alone if possible'
            ],
            callEmergency: true,
            videoLink: 'https://www.youtube.com/watch?v=KmD6ppYS63g'
        }
    };

    // If the requested emergency type exists in our database, return it
    if (emergencyDatabase[emergencyType]) {
        return emergencyDatabase[emergencyType];
    }

    // Otherwise return the default instructions
    return emergencyDatabase['default'];
}

// Function to display emergency instructions
function displayEmergencyInstructions(instructions, container) {
    // Clear previous results
    container.innerHTML = '';
    
    // Create title
    const titleEl = document.createElement('h3');
    titleEl.textContent = instructions.title;
    container.appendChild(titleEl);
    
    // Create description
    const descriptionEl = document.createElement('p');
    descriptionEl.textContent = instructions.description;
    container.appendChild(descriptionEl);
    
    // Create emergency call notice if needed
    if (instructions.callEmergency) {
        const emergencyNotice = document.createElement('div');
        emergencyNotice.className = 'when-to-seek-help';
        
        const emergencyIcon = document.createElement('i');
        emergencyIcon.className = 'fas fa-phone-alt';
        
        const emergencyText = document.createElement('strong');
        emergencyText.innerHTML = ' Call 911/112/Emergency Services immediately! ';
        
        emergencyNotice.appendChild(emergencyIcon);
        emergencyNotice.appendChild(emergencyText);
        
        if (typeof instructions.callEmergency === 'string') {
            emergencyNotice.appendChild(document.createTextNode(instructions.callEmergency));
        }
        
        container.appendChild(emergencyNotice);
    }
    
    // Create steps list
    const stepsHeader = document.createElement('h4');
    stepsHeader.textContent = 'Step-by-Step Instructions:';
    container.appendChild(stepsHeader);
    
    const stepsList = document.createElement('ol');
    instructions.steps.forEach(step => {
        const stepItem = document.createElement('li');
        stepItem.textContent = step;
        stepsList.appendChild(stepItem);
    });
    container.appendChild(stepsList);
    
    // Create Do's and Don'ts
    const doDontDiv = document.createElement('div');
    doDontDiv.className = 'do-dont';
    
    // Do's
    const doDiv = document.createElement('div');
    doDiv.className = 'do';
    
    const doHeader = document.createElement('h4');
    doHeader.innerHTML = '<i class="fas fa-check"></i> Do:';
    
    const doList = document.createElement('ul');
    instructions.do.forEach(item => {
        const doItem = document.createElement('li');
        doItem.textContent = item;
        doList.appendChild(doItem);
    });
    
    doDiv.appendChild(doHeader);
    doDiv.appendChild(doList);
    
    // Don'ts
    const dontDiv = document.createElement('div');
    dontDiv.className = 'dont';
    
    const dontHeader = document.createElement('h4');
    dontHeader.innerHTML = '<i class="fas fa-times"></i> Don\'t:';
    
    const dontList = document.createElement('ul');
    instructions.dont.forEach(item => {
        const dontItem = document.createElement('li');
        dontItem.textContent = item;
        dontList.appendChild(dontItem);
    });
    
    dontDiv.appendChild(dontHeader);
    dontDiv.appendChild(dontList);
    
    doDontDiv.appendChild(doDiv);
    doDontDiv.appendChild(dontDiv);
    container.appendChild(doDontDiv);
    
    // Add disclaimer
    const disclaimer = document.createElement('p');
    disclaimer.className = 'medical-disclaimer';
    disclaimer.innerHTML = '<small><strong>Note:</strong> This guide is for emergency situations only. Professional medical training is recommended for properly administering first aid.</small>';
    container.appendChild(disclaimer);
}

// Medicine Information functionality
function initMedicineInfo() {
    const searchButton = document.getElementById('search-medicine');
    const medicineInput = document.getElementById('medicine-search');
    const medicineResults = document.getElementById('medicine-results');
    const medicineTags = document.querySelectorAll('.medicine-tag');
    
    // Search button event listener
    searchButton.addEventListener('click', () => {
        const query = medicineInput.value.trim();
        
        if (query.length < 2) {
            alert('Please enter a valid medicine name.');
            return;
        }
        
        // Show loading state
        medicineResults.innerHTML = '<p>Retrieving medicine information...</p>';
        medicineResults.style.display = 'block';
        
        // Simulate API call
        setTimeout(() => {
            const medicineInfo = getMedicineInfo(query);
            displayMedicineInfo(medicineInfo, medicineResults);
        }, 1000);
    });
    
    // Medicine tag click events
    medicineTags.forEach(tag => {
        tag.addEventListener('click', () => {
            medicineInput.value = tag.textContent;
            searchButton.click();
        });
    });
}

// Function to get medicine information (enhanced AI implementation)
function getMedicineInfo(medicineName) {
    // Create a comprehensive medicine database
    const medicineDatabase = {
        'paracetamol': {
            name: 'Paracetamol (Acetaminophen)',
            description: 'A common pain reliever and fever reducer.',
            usage: 'Used to treat mild to moderate pain and reduce fever.',
            dosage: 'Adults: 500-1000 mg every 4-6 hours as needed (maximum 4000 mg per day). Children: Dosage varies by weight and age, consult a healthcare provider.',
            sideEffects: 'Generally safe when used as directed, but can cause liver damage in high doses or with long-term use. Rare side effects include allergic reactions and skin rashes.',
            warnings: [
                'Do not exceed recommended dose',
                'Avoid alcohol consumption while taking this medication',
                'May cause liver damage in high doses or with long-term use',
                'Consult doctor if you have liver disease, kidney disease, or alcohol dependency',
                'Should not be used for pain for more than 10 days in adults or 5 days in children without consulting a doctor',
                'May be present in other over-the-counter medications, so be careful not to double-dose'
            ],
            interactions: 'May interact with warfarin, isoniazid, and medications that affect the liver. Check with your doctor or pharmacist for a complete list of interactions.',
            category: 'Analgesic (Pain Reliever), Antipyretic (Fever Reducer)',
            brandNames: 'Tylenol, Panadol, Calpol, and various store brands',
            storage: 'Store at room temperature away from moisture and heat.'
        },
        'ibuprofen': {
            name: 'Ibuprofen',
            description: 'A nonsteroidal anti-inflammatory drug (NSAID) that reduces pain, inflammation, and fever.',
            usage: 'Used to treat pain, inflammation, and fever associated with various conditions including headaches, toothaches, menstrual cramps, arthritis, and minor injuries.',
            dosage: 'Adults: 200-400 mg every 4-6 hours as needed (maximum 1200 mg per day for over-the-counter use, 3200 mg per day if prescribed). Children: Dosage varies by weight and age, consult a healthcare provider.',
            sideEffects: 'Common side effects include stomach upset, heartburn, nausea, headache, dizziness, and rash. More serious side effects can include stomach bleeding, kidney problems, high blood pressure, and increased risk of heart attack or stroke.',
            warnings: [
                'Take with food or milk to reduce stomach upset',
                'Increased risk of heart attack, stroke, and stomach bleeding, especially with long-term use or in high doses',
                'Not recommended for use during the third trimester of pregnancy',
                'People with heart disease, high blood pressure, liver or kidney problems, or asthma should consult a doctor before use',
                'Avoid if you have had an allergic reaction to aspirin or other NSAIDs',
                'Stop use and seek medical help if you experience chest pain, shortness of breath, weakness, slurred speech, stomach pain, or black stools'
            ],
            interactions: 'May interact with blood thinners, aspirin, other NSAIDs, ACE inhibitors, diuretics, lithium, methotrexate, and many other medications. Always check with your doctor or pharmacist.',
            category: 'Nonsteroidal Anti-inflammatory Drug (NSAID)',
            brandNames: 'Advil, Motrin, Nurofen, and various store brands',
            storage: 'Store at room temperature away from moisture and heat.'
        },
        'aspirin': {
            name: 'Aspirin (Acetylsalicylic Acid)',
            description: 'A nonsteroidal anti-inflammatory drug (NSAID) that reduces pain, inflammation, and fever. It also has blood-thinning effects.',
            usage: 'Used to treat pain, inflammation, and fever. Low-dose aspirin is used to prevent blood clots, heart attacks, and strokes in at-risk individuals.',
            dosage: 'Pain/fever: Adults: 325-650 mg every 4-6 hours as needed (maximum 4000 mg per day). Heart protection: Typically 81-100 mg daily as directed by a doctor.',
            sideEffects: 'Common side effects include stomach irritation, heartburn, nausea, and increased risk of bleeding. More serious side effects can include stomach ulcers, bleeding, tinnitus (ringing in the ears), and allergic reactions.',
            warnings: [
                'Should not be given to children or teenagers with viral illnesses due to risk of Reye\'s syndrome',
                'Take with food to reduce stomach upset',
                'Increased risk of stomach bleeding, especially with long-term use, in older adults, or with alcohol use',
                'Stop taking and seek medical help if you experience ringing in the ears, hearing loss, or unusual bleeding',
                'Should not be taken during the last trimester of pregnancy',
                'Should be stopped 5-7 days before surgical procedures due to bleeding risk'
            ],
            interactions: 'May interact with blood thinners, other NSAIDs, corticosteroids, antidepressants, diabetes medications, gout medications, and many others. Always check with your doctor or pharmacist.',
            category: 'Nonsteroidal Anti-inflammatory Drug (NSAID), Antiplatelet',
            brandNames: 'Bayer, Bufferin, Ecotrin, and various store brands',
            storage: 'Store at room temperature away from moisture and heat.'
        },
        'amoxicillin': {
            name: 'Amoxicillin',
            description: 'A penicillin-type antibiotic that fights bacteria in the body.',
            usage: 'Used to treat a wide variety of bacterial infections, including infections of the ears, nose, throat, urinary tract, skin, and lungs.',
            dosage: 'Adults: Typically 250-500 mg every 8 hours or 500-875 mg every 12 hours, depending on the infection. Children: Dosage is based on weight, typically 20-90 mg/kg per day divided into 2-3 doses. Always follow your doctor\'s prescription.',
            sideEffects: 'Common side effects include diarrhea, stomach upset, nausea, vomiting, and rash. Serious side effects can include severe allergic reactions, Clostridium difficile infection (severe diarrhea), and other severe skin reactions.',
            warnings: [
                'Complete the full course of treatment, even if you feel better',
                'Inform your doctor if you have allergies, especially to penicillin or cephalosporin antibiotics',
                'May reduce the effectiveness of birth control pills',
                'Take as prescribed at evenly spaced intervals',
                'Seek immediate medical attention if you experience signs of an allergic reaction (rash, itching, swelling, severe dizziness, trouble breathing)',
                'May cause a false positive on certain diabetes urine tests'
            ],
            interactions: 'May interact with allopurinol, blood thinners, other antibiotics, and probenecid. Can make oral contraceptives less effective.',
            category: 'Antibiotic, Penicillin',
            brandNames: 'Amoxil, Trimox, Moxatag',
            storage: 'Store at room temperature away from moisture, heat, and light. Liquid forms may need refrigeration - check your prescription label.'
        },
        'lisinopril': {
            name: 'Lisinopril',
            description: 'An angiotensin-converting enzyme (ACE) inhibitor that helps relax blood vessels.',
            usage: 'Used to treat high blood pressure, congestive heart failure, and to improve survival after a heart attack. Also used to protect the kidneys in people with diabetes.',
            dosage: 'Adults: For hypertension, initially 10 mg once daily, then adjusted to 20-40 mg once daily. For heart failure, initially 5 mg once daily, then adjusted as needed. Always follow your doctor\'s prescription.',
            sideEffects: 'Common side effects include dry cough, dizziness, headache, fatigue, and high potassium levels. Serious side effects can include swelling of the face, lips, tongue, or throat (angioedema), kidney problems, and low blood pressure.',
            warnings: [
                'May cause birth defects if taken during pregnancy',
                'Avoid if you have a history of angioedema related to previous ACE inhibitor therapy',
                'May cause a persistent dry cough',
                'Monitor blood pressure and kidney function regularly',
                'Avoid potassium supplements unless directed by your doctor',
                'Do not use salt substitutes that contain potassium without consulting your doctor'
            ],
            interactions: 'May interact with potassium supplements, potassium-sparing diuretics, lithium, NSAIDs, and other medications. Always check with your doctor or pharmacist.',
            category: 'Angiotensin-Converting Enzyme (ACE) Inhibitor',
            brandNames: 'Prinivil, Zestril',
            storage: 'Store at room temperature away from moisture and heat.'
        },
        'metformin': {
            name: 'Metformin',
            description: 'An oral diabetes medicine that helps control blood sugar levels.',
            usage: 'Used primarily to treat type 2 diabetes, either alone or in combination with other medications. Also sometimes prescribed for polycystic ovary syndrome (PCOS).',
            dosage: 'Adults: Initially 500 mg twice daily or 850 mg once daily with meals. Dosage may be gradually increased. Extended-release forms are usually taken once daily. Maximum dosage is typically 2550-3000 mg per day. Always follow your doctor\'s prescription.',
            sideEffects: 'Common side effects include nausea, vomiting, stomach upset, diarrhea, metallic taste in mouth, and loss of appetite (usually temporary). Serious side effects include lactic acidosis (rare but serious) with symptoms like muscle pain, difficulty breathing, unusual drowsiness, and stomach pain.',
            warnings: [
                'Take with meals to minimize stomach upset',
                'Avoid excessive alcohol consumption, which increases the risk of lactic acidosis',
                'May need to be temporarily discontinued before certain medical procedures or tests using contrast dyes',
                'Regular monitoring of kidney function and vitamin B12 levels is recommended',
                'Should not be used in people with severe kidney disease',
                'Seek immediate medical attention for symptoms of lactic acidosis (severe fatigue, weakness, muscle pain, breathing difficulty)'
            ],
            interactions: 'May interact with cimetidine, furosemide, nifedipine, contrast dyes, corticosteroids, and other medications. Always check with your doctor or pharmacist.',
            category: 'Biguanide, Antidiabetic',
            brandNames: 'Glucophage, Glumetza, Fortamet, Riomet',
            storage: 'Store at room temperature away from moisture, heat, and light.'
        },
        'atorvastatin': {
            name: 'Atorvastatin',
            description: 'A statin medication that reduces the amount of cholesterol made by the liver.',
            usage: 'Used to lower blood cholesterol levels and reduce the risk of cardiovascular disease in people with elevated cholesterol levels or other risk factors.',
            dosage: 'Adults: Typically 10-80 mg once daily. The starting dose depends on cholesterol levels and cardiovascular risk factors. Always follow your doctor\'s prescription.',
            sideEffects: 'Common side effects include muscle pain, joint pain, diarrhea, nausea, and mild memory problems. Serious side effects include liver damage, severe muscle breakdown (rhabdomyolysis), and increased blood sugar levels.',
            warnings: [
                'Report any unexplained muscle pain, tenderness, or weakness to your doctor immediately',
                'Periodic blood tests are needed to check liver function',
                'Avoid large amounts of grapefruit or grapefruit juice (can increase drug levels)',
                'Inform your doctor if you are pregnant, planning to become pregnant, or breastfeeding',
                'The risk of muscle problems increases if taking certain other medications',
                'May slightly increase the risk of developing type 2 diabetes'
            ],
            interactions: 'May interact with certain antibiotics, antifungals, HIV medications, other cholesterol medications, cyclosporine, gemfibrozil, and others. Always check with your doctor or pharmacist.',
            category: 'HMG-CoA Reductase Inhibitor (Statin)',
            brandNames: 'Lipitor',
            storage: 'Store at room temperature away from moisture and heat.'
        },
        'omeprazole': {
            name: 'Omeprazole',
            description: 'A proton pump inhibitor (PPI) that decreases the amount of acid produced in the stomach.',
            usage: 'Used to treat frequent heartburn, gastroesophageal reflux disease (GERD), stomach and duodenal ulcers, erosive esophagitis, and other conditions involving excessive stomach acid.',
            dosage: 'Adults: For heartburn/GERD: 20 mg once daily for 4-8 weeks. For ulcers: 20-40 mg once daily for 4-8 weeks. For other conditions, dosage may vary. Always follow your doctor\'s prescription or package directions for over-the-counter use.',
            sideEffects: 'Common side effects include headache, nausea, vomiting, diarrhea, stomach pain, and flatulence. Long-term use may be associated with vitamin B12 deficiency, bone fractures, kidney problems, and increased risk of certain infections.',
            warnings: [
                'Take at least 30-60 minutes before eating',
                'Swallow capsules whole; do not crush, chew, or open unless instructed to do so',
                'Long-term use may increase the risk of bone fractures, especially in older adults',
                'May increase the risk of Clostridium difficile infection',
                'Long-term use may lead to vitamin B12 or magnesium deficiency',
                'Over-the-counter use should not exceed 14 days or more than 3 courses in a year without consulting a doctor'
            ],
            interactions: 'May interact with clopidogrel, diazepam, digoxin, iron supplements, warfarin, methotrexate, HIV medications, and many others. Always check with your doctor or pharmacist.',
            category: 'Proton Pump Inhibitor (PPI)',
            brandNames: 'Prilosec, Losec, and various store brands',
            storage: 'Store at room temperature away from moisture, heat, and light.'
        },
        'levothyroxine': {
            name: 'Levothyroxine',
            description: 'A synthetic form of thyroxine (T4), a hormone normally produced by the thyroid gland.',
            usage: 'Used to treat hypothyroidism (low thyroid hormone) and to prevent or treat goiter (enlarged thyroid gland).',
            dosage: 'Adults: Typically starts at 25-50 mcg once daily, adjusted every 6-8 weeks based on blood tests until optimal dosage is reached. Elderly patients or those with heart disease often start with lower doses. Always follow your doctor\'s prescription.',
            sideEffects: 'When properly dosed, side effects are minimal. Too high a dose can cause symptoms of hyperthyroidism: rapid or irregular heartbeat, nervousness, irritability, insomnia, tremors, muscle weakness, shortness of breath, chest pain, increased sweating, heat intolerance, and weight loss.',
            warnings: [
                'Take on an empty stomach, 30-60 minutes before breakfast',
                'Take with a full glass of water',
                'Take at the same time each day for consistent absorption',
                'Regular blood tests are necessary to monitor thyroid function',
                'Many medications and supplements can affect absorption - take at least 4 hours apart from calcium supplements, iron, antacids, and certain other medications',
                'Do not switch brands without consulting your doctor, as different brands may be absorbed differently'
            ],
            interactions: 'May interact with antacids, calcium supplements, iron supplements, warfarin, digoxin, diabetes medications, and many others. Always check with your doctor or pharmacist.',
            category: 'Thyroid Hormone Replacement',
            brandNames: 'Synthroid, Levoxyl, Tirosint, Euthyrox',
            storage: 'Store at room temperature away from moisture and heat.'
        },
        'loratadine': {
            name: 'Loratadine',
            description: 'A second-generation antihistamine that reduces the effects of histamine in the body.',
            usage: 'Used to relieve symptoms of allergies, such as sneezing, watery eyes, runny nose, itching eyes/nose, and hives.',
            dosage: 'Adults and children 6 years and older: 10 mg once daily. Children 2-5 years: 5 mg once daily. Not recommended for children under 2 years without medical supervision.',
            sideEffects: 'Generally well-tolerated with minimal side effects. May cause headache, drowsiness (less common than with older antihistamines), dry mouth, nervousness, and rarely, fast or irregular heartbeat.',
            warnings: [
                'May cause drowsiness in some people, though less likely than older antihistamines',
                'Use caution when driving or operating machinery until you know how it affects you',
                'Consult a doctor before use if you have liver or kidney disease',
                'Not recommended for use during pregnancy or breastfeeding without medical advice',
                'May be less effective for severe allergic reactions or acute hives',
                'Does not treat or prevent anaphylaxis'
            ],
            interactions: 'May interact with ketoconazole, erythromycin, cimetidine, and certain other medications. Generally has fewer interactions than older antihistamines.',
            category: 'Antihistamine, H1 Blocker',
            brandNames: 'Claritin, Alavert, and various store brands',
            storage: 'Store at room temperature away from moisture and heat.'
        },
        'default': {
            name: 'Medicine Information',
            description: 'Information about this medicine is not available in our database.',
            usage: 'Please consult your doctor or pharmacist for information on how to use this medication properly.',
            dosage: 'Always follow the dosage instructions provided by your healthcare provider or the medication label.',
            sideEffects: 'All medications can cause side effects. Consult your doctor or pharmacist for specific information about potential side effects.',
            warnings: [
                'Keep all medications out of reach of children',
                'Do not share prescription medications with others',
                'Take medications exactly as prescribed',
                'Inform your doctor about all medications you are taking, including over-the-counter drugs and supplements',
                'Consult your doctor before stopping any prescribed medication',
                'Check expiration dates and properly dispose of expired medications'
            ],
            interactions: 'Many medications can interact with other drugs, supplements, foods, or alcohol. Consult your doctor or pharmacist for specific interaction information.',
            category: 'Medication',
            brandNames: 'Various',
            storage: 'Generally, store medications at room temperature away from moisture and heat unless otherwise instructed.'
        }
    };

    // Convert the input to lowercase for case-insensitive matching
    const medicineNameLower = medicineName.toLowerCase();
    
    // Check if the medicine exists in our database
    if (medicineDatabase[medicineNameLower]) {
        return medicineDatabase[medicineNameLower];
    }
    
    // Try to find a partial match
    for (const key in medicineDatabase) {
        if (key !== 'default' && key.includes(medicineNameLower) || medicineNameLower.includes(key)) {
            return medicineDatabase[key];
        }
    }
    
    // If no match is found, return the default information
    return medicineDatabase['default'];
}

// Function to display medicine information
function displayMedicineInfo(medicine, container) {
    // Clear previous results
    container.innerHTML = '';
    
    // Create medicine name heading
    const nameEl = document.createElement('h3');
    nameEl.textContent = medicine.name;
    container.appendChild(nameEl);
    
    // Create classification
    const classificationEl = document.createElement('p');
    classificationEl.innerHTML = `<strong>Classification:</strong> ${medicine.classification}`;
    container.appendChild(classificationEl);
    
    // Create description
    const descriptionEl = document.createElement('p');
    descriptionEl.textContent = medicine.description;
    container.appendChild(descriptionEl);
    
    // Create dosage section
    const dosageHeader = document.createElement('h4');
    dosageHeader.innerHTML = '<i class="fas fa-prescription"></i> Dosage:';
    container.appendChild(dosageHeader);
    
    const dosageList = document.createElement('ul');
    
    const adultDosageItem = document.createElement('li');
    adultDosageItem.innerHTML = `<strong>Adults:</strong> ${medicine.dosage.adults}`;
    dosageList.appendChild(adultDosageItem);
    
    const childDosageItem = document.createElement('li');
    childDosageItem.innerHTML = `<strong>Children:</strong> ${medicine.dosage.children}`;
    dosageList.appendChild(childDosageItem);
    
    container.appendChild(dosageList);
    
    // Create side effects section
    const sideEffectsHeader = document.createElement('h4');
    sideEffectsHeader.innerHTML = '<i class="fas fa-exclamation-circle"></i> Side Effects:';
    container.appendChild(sideEffectsHeader);
    
    const sideEffectsList = document.createElement('ul');
    medicine.sideEffects.forEach(effect => {
        const effectItem = document.createElement('li');
        effectItem.textContent = effect;
        sideEffectsList.appendChild(effectItem);
    });
    container.appendChild(sideEffectsList);
    
    // Create interactions section
    const interactionsHeader = document.createElement('h4');
    interactionsHeader.innerHTML = '<i class="fas fa-random"></i> Drug Interactions:';
    container.appendChild(interactionsHeader);
    
    const interactionsList = document.createElement('ul');
    medicine.interactions.forEach(interaction => {
        const interactionItem = document.createElement('li');
        interactionItem.textContent = interaction;
        interactionsList.appendChild(interactionItem);
    });
    container.appendChild(interactionsList);
    
    // Create warnings section
    const warningsHeader = document.createElement('h4');
    warningsHeader.innerHTML = '<i class="fas fa-shield-alt"></i> Warnings & Precautions:';
    container.appendChild(warningsHeader);
    
    const warningsList = document.createElement('ul');
    medicine.warnings.forEach(warning => {
        const warningItem = document.createElement('li');
        warningItem.textContent = warning;
        warningsList.appendChild(warningItem);
    });
    container.appendChild(warningsList);
    
    // Create storage info
    const storageEl = document.createElement('p');
    storageEl.innerHTML = `<strong>Storage:</strong> ${medicine.storage}`;
    container.appendChild(storageEl);
    
    // Add disclaimer
    const disclaimer = document.createElement('p');
    disclaimer.className = 'medical-disclaimer';
    disclaimer.innerHTML = '<small><strong>Note:</strong> This information is for educational purposes only. Always follow your healthcare provider\'s instructions and read the medication packaging.</small>';
    container.appendChild(disclaimer);
}

// Health Tips functionality
function initHealthTips() {
    const tipsButton = document.getElementById('get-health-tips');
    const healthIssueInput = document.getElementById('health-issue');
    const healthTipsResults = document.getElementById('health-tips-results');
    const categoryButtons = document.querySelectorAll('.category-btn');
    
    // Get tips button event listener
    tipsButton.addEventListener('click', () => {
        const issue = healthIssueInput.value.trim();
        
        if (issue.length < 3) {
            alert('Please describe your health concern in more detail.');
            return;
        }
        
        // Show loading state
        healthTipsResults.innerHTML = '<p>Analyzing your health concern...</p>';
        healthTipsResults.style.display = 'block';
        
        // Simulate API call
        setTimeout(() => {
            const tips = getHealthTips(issue);
            displayHealthTips(tips, healthTipsResults);
        }, 1200);
    });
    
    // Category button click events
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            healthIssueInput.value = `Give me tips for ${category}`;
            tipsButton.click();
        });
    });
}

// Function to get health tips (mock implementation)
function getHealthTips(healthIssue) {
    healthIssue = healthIssue.toLowerCase();
    
    if (healthIssue.includes('tired') || healthIssue.includes('fatigue') || healthIssue.includes('energy')) {
        return {
            issue: 'Fatigue and Low Energy',
            general: 'Fatigue can be caused by various factors including poor sleep, nutrient deficiencies, dehydration, stress, or underlying medical conditions.',
            nutrition: [
                'Increase iron-rich foods (lean meats, beans, leafy greens)',
                'Ensure adequate B-vitamin intake (whole grains, eggs, dairy)',
                'Eat smaller, more frequent meals to maintain energy levels',
                'Include protein with each meal for sustained energy',
                'Reduce refined sugars which can cause energy crashes'
            ],
            lifestyle: [
                'Establish a consistent sleep schedule (7-9 hours nightly)',
                'Incorporate moderate exercise (30 minutes daily)',
                'Practice stress management techniques (meditation, deep breathing)',
                'Stay hydrated (8+ glasses of water daily)',
                'Take short breaks during long periods of mental activity'
            ],
            medicalAdvice: 'If fatigue persists despite lifestyle changes, consult a healthcare provider to rule out conditions like anemia, thyroid disorders, sleep apnea, or depression.'
        };
    } else if (healthIssue.includes('stress') || healthIssue.includes('anxiety') || healthIssue.includes('worry')) {
        return {
            issue: 'Stress and Anxiety Management',
            general: 'Some stress is normal, but chronic stress can negatively impact physical and mental health. Developing healthy coping mechanisms is essential.',
            nutrition: [
                'Limit caffeine and alcohol which can worsen anxiety',
                'Include omega-3 fatty acids (fish, walnuts, flaxseeds)',
                'Consume magnesium-rich foods (dark chocolate, avocados, nuts)',
                'Include complex carbohydrates for serotonin production',
                'Stay well-hydrated as dehydration can increase stress hormones'
            ],
            lifestyle: [
                'Practice deep breathing exercises (4-7-8 technique)',
                'Incorporate daily mindfulness meditation (even 5-10 minutes helps)',
                'Engage in regular physical activity to reduce stress hormones',
                'Establish healthy boundaries with work and technology',
                'Prioritize social connections and supportive relationships',
                'Consider journaling to process thoughts and emotions'
            ],
            medicalAdvice: 'If stress or anxiety significantly impacts daily functioning, consider speaking with a mental health professional about therapy options like cognitive-behavioral therapy (CBT).'
        };
    } else if (healthIssue.includes('sleep') || healthIssue.includes('insomnia')) {
        return {
            issue: 'Sleep Difficulties',
            general: 'Quality sleep is essential for overall health, cognitive function, and emotional wellbeing. Most adults need 7-9 hours of sleep nightly.',
            nutrition: [
                'Avoid large meals 2-3 hours before bedtime',
                'Limit caffeine after noon',
                'Consider a small carbohydrate-rich snack before bed if hungry',
                'Try calming teas like chamomile or valerian root',
                'Limit alcohol which disrupts REM sleep'
            ],
            lifestyle: [
                'Maintain a consistent sleep-wake schedule, even on weekends',
                'Create a relaxing bedtime routine',
                'Keep your bedroom cool (65-68°F), dark, and quiet',
                'Avoid screens 1-2 hours before bed (blue light blocks melatonin)',
                'Exercise regularly, but not within 2-3 hours of bedtime',
                'Use your bed only for sleep and intimacy, not work or entertainment'
            ],
            medicalAdvice: 'If sleep problems persist for more than a month, consult a healthcare provider to rule out sleep disorders like sleep apnea or conditions like depression.'
        };
    } else if (healthIssue.includes('weight') || healthIssue.includes('diet') || healthIssue.includes('nutrition')) {
        return {
            issue: 'Weight Management and Nutrition',
            general: 'Healthy weight management involves sustainable lifestyle changes rather than quick fixes or extreme diets.',
            nutrition: [
                'Focus on whole, unprocessed foods (fruits, vegetables, whole grains, lean proteins)',
                'Practice portion control using the plate method (½ vegetables, ¼ protein, ¼ whole grains)',
                'Include protein with each meal to increase satiety',
                'Stay hydrated, as thirst is often mistaken for hunger',
                'Limit added sugars, refined carbohydrates, and highly processed foods',
                'Consider mindful eating techniques to recognize hunger and fullness cues'
            ],
            lifestyle: [
                'Aim for 150+ minutes of moderate aerobic activity weekly',
                'Include strength training 2-3 times weekly to maintain muscle mass',
                'Get adequate sleep, as sleep deprivation affects hunger hormones',
                'Manage stress to reduce emotional or stress eating',
                'Track food intake temporarily to increase awareness',
                'Set realistic, measurable goals focused on behaviors rather than just weight'
            ],
            medicalAdvice: 'Consult a healthcare provider before beginning any significant weight loss program, especially if you have underlying health conditions or are taking medications.'
        };
    } else {
        return {
            issue: 'General Health Optimization',
            general: 'Building healthy habits in nutrition, physical activity, stress management, and sleep can help prevent many chronic conditions and improve quality of life.',
            nutrition: [
                'Emphasize a varied diet rich in colorful fruits and vegetables',
                'Choose whole grains over refined grains',
                'Include healthy protein sources (plant and/or animal-based)',
                'Incorporate healthy fats from sources like olive oil, avocados, and nuts',
                'Stay well-hydrated, primarily with water',
                'Limit processed foods, added sugars, and excessive sodium'
            ],
            lifestyle: [
                'Aim for at least 150 minutes of moderate exercise weekly',
                'Include both cardiovascular and strength training exercises',
                'Prioritize quality sleep (7-9 hours for adults)',
                'Practice stress management techniques regularly',
                'Maintain social connections and supportive relationships',
                'Engage in activities that provide mental stimulation',
                'Avoid tobacco and limit alcohol consumption'
            ],
            medicalAdvice: 'Schedule regular preventive health screenings appropriate for your age, gender, and risk factors. Stay up-to-date on recommended vaccinations.'
        };
    }
}

// Function to display health tips
function displayHealthTips(tips, container) {
    // Clear previous results
    container.innerHTML = '';
    
    // Create issue heading
    const issueEl = document.createElement('h3');
    issueEl.textContent = tips.issue;
    container.appendChild(issueEl);
    
    // Create general description
    const generalEl = document.createElement('p');
    generalEl.textContent = tips.general;
    container.appendChild(generalEl);
    
    // Create nutrition section
    const nutritionHeader = document.createElement('h4');
    nutritionHeader.innerHTML = '<i class="fas fa-apple-alt"></i> Nutrition Recommendations:';
    container.appendChild(nutritionHeader);
    
    const nutritionList = document.createElement('ul');
    tips.nutrition.forEach(tip => {
        const tipItem = document.createElement('li');
        tipItem.textContent = tip;
        nutritionList.appendChild(tipItem);
    });
    container.appendChild(nutritionList);
    
    // Create lifestyle section
    const lifestyleHeader = document.createElement('h4');
    lifestyleHeader.innerHTML = '<i class="fas fa-hiking"></i> Lifestyle Modifications:';
    container.appendChild(lifestyleHeader);
    
    const lifestyleList = document.createElement('ul');
    tips.lifestyle.forEach(tip => {
        const tipItem = document.createElement('li');
        tipItem.textContent = tip;
        lifestyleList.appendChild(tipItem);
    });
    container.appendChild(lifestyleList);
    
    // Create medical advice section
    const medicalHeader = document.createElement('h4');
    medicalHeader.innerHTML = '<i class="fas fa-user-md"></i> Medical Considerations:';
    container.appendChild(medicalHeader);
    
    const medicalEl = document.createElement('p');
    medicalEl.textContent = tips.medicalAdvice;
    container.appendChild(medicalEl);
    
    // Add disclaimer
    const disclaimer = document.createElement('p');
    disclaimer.className = 'medical-disclaimer';
    disclaimer.innerHTML = '<small><strong>Note:</strong> These recommendations are general in nature. Consult with healthcare professionals for personalized advice.</small>';
    container.appendChild(disclaimer);
}

// Voice Assistant functionality
function initVoiceAssistant() {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
        alert("Your browser doesn't support speech recognition. Try using Chrome or Edge.");
        return;
    }

    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    const voiceBtn = document.getElementById('voiceAssistantBtn');
    const voiceOutput = document.getElementById('voiceOutput');
    let isListening = false;
    
    // Configure speech recognition
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';
    
    // When voice recognition starts
    recognition.onstart = function() {
        isListening = true;
        voiceBtn.classList.add('listening');
        voiceBtn.innerHTML = '<i class="fas fa-microphone-alt"></i> Listening...';
        voiceOutput.innerHTML = '<div class="voice-status">Listening... Please speak now.</div>';
    };
    
    // When voice recognition ends
    recognition.onend = function() {
        isListening = false;
        voiceBtn.classList.remove('listening');
        voiceBtn.innerHTML = '<i class="fas fa-microphone"></i> Voice Assistant';
    };
    
    // When voice recognition error occurs
    recognition.onerror = function(event) {
        isListening = false;
        voiceBtn.classList.remove('listening');
        voiceBtn.innerHTML = '<i class="fas fa-microphone"></i> Voice Assistant';
        
        let errorMessage = '';
        switch(event.error) {
            case 'no-speech':
                errorMessage = "I didn't hear anything. Please try again.";
                break;
            case 'aborted':
                errorMessage = "Listening was aborted. Please try again.";
                break;
            case 'network':
                errorMessage = "Network error occurred. Please check your connection.";
                break;
            case 'not-allowed':
                errorMessage = "Microphone access was not allowed. Please enable microphone permissions.";
                break;
            default:
                errorMessage = "An error occurred with speech recognition. Please try again.";
        }
        
        voiceOutput.innerHTML = `<div class="voice-error">${errorMessage}</div>`;
    };
    
    // Process speech recognition results
    recognition.onresult = function(event) {
        const speechResult = event.results[0][0].transcript.toLowerCase();
        voiceOutput.innerHTML = `<div class="user-query"><strong>You said:</strong> ${speechResult}</div>`;
        
        // Process the command
        processVoiceCommand(speechResult);
    };
    
    // Toggle voice recognition when button is clicked
    voiceBtn.addEventListener('click', function() {
        if (isListening) {
            recognition.stop();
        } else {
            recognition.start();
        }
    });
    
    // Process voice commands
    function processVoiceCommand(command) {
        // Normalize the command by removing extra spaces and converting to lowercase
        const normalizedCommand = command.toLowerCase().trim();
        
        setTimeout(() => {
            let response = "";
            let actionTaken = false;
            
            // Check for greetings
            if (containsAny(normalizedCommand, ["hello", "hi", "hey", "greetings"])) {
                response = "Hello! I'm your medical assistant. How can I help you today?";
                actionTaken = true;
            } 
            // Check for help request
            else if (containsAny(normalizedCommand, ["help", "what can you do", "assist me"])) {
                response = "I can help with symptom analysis, medical FAQs, emergency guides, medicine information, and health tips. Just ask me what you need!";
                actionTaken = true;
            }
            // Check for symptom analysis request
            else if (containsAny(normalizedCommand, ["symptom", "not feeling well", "sick", "pain", "ache", "hurts"])) {
                response = "I'll help analyze your symptoms. Could you please navigate to the Symptom Analysis section and provide more details?";
                showSection('symptomAnalysis');
                actionTaken = true;
            }
            // Check for emergency guides
            else if (containsAny(normalizedCommand, ["emergency", "urgent", "help me", "critical", "accident"])) {
                response = "For emergency information, I've opened the Emergency Guide section. Please select the specific emergency situation.";
                showSection('emergencyGuide');
                actionTaken = true;
            }
            // Check for medicine information
            else if (containsAny(normalizedCommand, ["medicine", "drug", "medication", "pill", "prescription", "dosage"])) {
                // Extract medicine name if present
                const medicineWords = ["medicine", "medication", "drug", "pill", "about", "information", "info", "on", "for", "dosage", "side effects"];
                let potentialMedicineName = normalizedCommand;
                
                // Remove common words to isolate medicine name
                medicineWords.forEach(word => {
                    potentialMedicineName = potentialMedicineName.replace(new RegExp(`\\b${word}\\b`, 'gi'), '');
                });
                
                potentialMedicineName = potentialMedicineName.trim();
                
                if (potentialMedicineName && potentialMedicineName !== normalizedCommand) {
                    document.getElementById('medicineName').value = potentialMedicineName;
                    document.getElementById('medicineInfoBtn').click();
                    response = `Looking up information for ${potentialMedicineName}...`;
                } else {
                    response = "I've opened the Medicine Information section. Please enter the name of the medication you'd like to learn about.";
                }
                
                showSection('medicineInfo');
                actionTaken = true;
            }
            // Check for health tips
            else if (containsAny(normalizedCommand, ["health tip", "wellness", "advice", "healthy", "lifestyle"])) {
                // Check for specific health tip categories
                let category = 'default';
                
                if (containsAny(normalizedCommand, ["food", "eat", "diet", "nutrition"])) {
                    category = 'nutrition';
                } else if (containsAny(normalizedCommand, ["exercise", "workout", "fitness", "activity"])) {
                    category = 'exercise';
                } else if (containsAny(normalizedCommand, ["sleep", "rest", "insomnia", "tired"])) {
                    category = 'sleep';
                } else if (containsAny(normalizedCommand, ["stress", "anxiety", "relax", "calm"])) {
                    category = 'stress';
                } else if (containsAny(normalizedCommand, ["mental", "mind", "brain", "cognitive"])) {
                    category = 'mental';
                } else if (containsAny(normalizedCommand, ["prevent", "prevention", "avoid", "risk"])) {
                    category = 'prevention';
                }
                
                // Set the category in the dropdown and trigger the button click
                document.getElementById('healthTipCategory').value = category;
                document.getElementById('healthTipBtn').click();
                
                response = `Here's a health tip about ${category}!`;
                showSection('healthTips');
                actionTaken = true;
            }
            // Check for FAQ questions
            else if (containsAny(normalizedCommand, ["question", "faq", "ask", "answer", "what is", "how to", "why", "when should"])) {
                document.getElementById('medicalQuestion').value = normalizedCommand;
                document.getElementById('medicalFAQBtn').click();
                response = "I'll try to answer your question...";
                showSection('medicalFAQ');
                actionTaken = true;
            }
            // Check for closing or exiting
            else if (containsAny(normalizedCommand, ["exit", "close", "quit", "bye", "goodbye", "thank you"])) {
                response = "Thank you for using the Medical Assistant. Feel free to ask for help anytime!";
                actionTaken = true;
            }
            // Default response if no command matches
            else {
                response = "I'm not sure what you're asking. You can try asking about symptoms, emergencies, medications, health tips, or medical questions.";
            }
            
            // Display the response
            voiceOutput.innerHTML += `<div class="assistant-response"><strong>Assistant:</strong> ${response}</div>`;
            
            // Text-to-speech for the response
            speakResponse(response);
            
        }, 1000); // Short delay to simulate processing
    }
    
    // Helper function to check if a string contains any of the words in an array
    function containsAny(str, words) {
        return words.some(word => str.includes(word));
    }
    
    // Text-to-speech function
    function speakResponse(text) {
        if ('speechSynthesis' in window) {
            const speech = new SpeechSynthesisUtterance();
            speech.text = text;
            speech.volume = 1;
            speech.rate = 1;
            speech.pitch = 1;
            
            // Stop any ongoing speech before starting new one
            window.speechSynthesis.cancel();
            window.speechSynthesis.speak(speech);
        }
    }
}
const dictionary = {
    'ua': {
        // --- NAVIGATION ---
        'nav_name': 'Вбудовані Системи',
        'nav_home': 'Головна',
        'nav_architecture': 'Архітектура',
        'nav_firmware': 'Прошивка',
        'nav_software': 'Алгоритми',
        'nav_sources': 'Ресурси',
        'switchLang': 'UA',

        // --- Page Titles ---
        'home': 'Вбудовані Системи: Головна',
        'architecture': 'Вбудовані Системи: Архітектура',
        'firmware': 'Вбудовані Системи: Прошивка',
        'software': 'Вбудовані Системи: ПЗ',
        'sources': 'Вбудовані Системи: Джерела',

        // --- sources links ---
        'source1': 'Шрифти Google',
        'source2': 'The Engineering Projects',
        'source3': 'Coursera',
        'source4': 'Embedded.com',
        'source5': 'GeeksforGeeks',

        // --- SIDEBAR (TOOLS) ---
        'sidebar_title': 'Інструменти',
        'cat_coding': 'Написання Коду',
        'desc_vscode': 'Легкий та гнучкий. Основний інструмент більшості інженерів.',
        'desc_vs2022': 'Потужне IDE. Найкраще середовище для вивчення глибин C++.',
        'cat_engineering': 'Інженерія',
        'desc_cube': 'Офіційне середовище розробки для мікроконтролерів STM32.',
        'desc_proteus': 'Професійна симуляція. Дозволяє тестувати код разом зі схемою.',
        'cat_pcb': 'Проектування Плат',
        'desc_kicad': 'Стандарт Open Source. Створення професійних плат безкоштовно.',
        'desc_altium': 'Преміум вибір. Використовується топ-компаніями для складної електроніки.',

        // --- HERO ---
        'hero_title': 'Оживи',
        'hero_title_highlight': 'Холодне Залізо',
        'hero_subtitle': 'Код здатний на більше, ніж просто виводити текст на екран. Вбудовані системи — це прикладна Комп\'ютерна наука у реальному світі. Тут алгоритми стають мостом між абстрактною логікою та законами фізики.',
        'btn_firmware': 'Як це працює?',
        'btn_software': 'Більше',

        // --- VIDEO ---
        'video_title': 'Вбудовані Системи за 3 хвилини',
        'video_desc': 'Взаємодія коду з фізичними компонентами для створення розумних пристроїв.',
        'video_btn': 'Натисніть, щоб дивитися',

        // --- CARDS ---
        'card1_title': 'Іскра Життя',
        'card1_desc': 'Це унікальний момент, коли твій абстрактний код перетворюється на реальну дію. Ти пишеш команду, і фізичний пристрій блимає, їде або реагує. Це справжня магія створення.',

        'card2_title': 'Гідна Винагорода',
        'card2_desc': 'Складні навички завжди високо цінуються. Оскільки ця сфера вимагає знань електроніки та програмування, компанії готові інвестувати у спеціалістів.',

        'card3_title': 'Вічні Знання',
        'card3_desc': 'Технології змінюються, але фізика залишається. Розуміння того, як насправді працює процесор — це фундаментальна база, яка ніколи не застаріє.',

        'footer_author': 'Зроблено Войцехівським Дмитро ст. гр. 3КН-25б',

        'mobile_navigation': 'Навігація',

        // --- (architecture.html) ---
        'arch_title': 'Архітектура обчислювальних систем',
        'arch_isa_title': '1. Архітектура набору інструкцій (ISA)',
        'arch_isa_desc': 'Це фундаментальний контракт між розробником та архітектурою. <strong>ISA</strong> визначає логічну модель процесора — набір доступних регістрів та модель адресації пам\'яті. Робота з <strong>RISC-V</strong> або <strong>ARM</strong> вимагає розуміння того, як інструкції кодують стан системи, що дозволяє використовувати архітектурні розширення для прямого керування ресурсами через опкоди.',

        'arch_pipe_title': '2. Конвеєр процесора та шлях даних',
        'arch_pipe_desc': 'Сучасні обчислювальні блоки використовують конвеєризацію для паралельного виконання команд, розбиваючи цикл на стадії: <strong>Fetch, Decode, Execute, Writeback</strong>. Розуміння цієї логіки дозволяє аналізувати конфлікти залежностей та механізми передбачення розгалужень. Це дає змогу будувати лінійні ланцюги інструкцій, що проходять крізь ядро процесора без простоїв.',

        'arch_mem_title': '3. Ієрархія пам\'яті та локальність',
        'arch_mem_desc': 'Продуктивність системи обмежена ієрархією пам\'яті: від швидких регістрів до кешу <strong>L1/L2</strong> та основної RAM. Явище «стіни пам’яті» змушує проектувати структури даних, сумісні з кешем. Оптимальна робота з кеш-лініями дозволяє уникати значних затримок, які виникають при тривалому очікуванні відповіді від зовнішньої шини пам\'яті.',

        // --- (firmware.html) ---
        'fw_title': 'Прошивка чипів та Системні інтерфейси',
        'fw_sec1_title': '1. Топологія та архітектура чипа',
        'fw_mcu_desc': 'Взаємодія процесорного ядра з Flash та RAM. Аналіз внутрішньої матриці шин (<strong>Bus Matrix</strong>) дозволяє оптимізувати шлях вибірки інструкцій та усунути конфлікти при одночасному зверненні ядра до різних сегментів пам\'яті. Це фундамент продуктивності: правильна топологія забезпечує роботу системи без простоїв ядра.',

        'fw_sec2_title': '2. Регістри та MMIO',
        'fw_reg_desc': 'Архітектура — це просто набір адрес у пам\'яті. Записав одиницю в потрібний регістр — пішов струм на піни. Ніякої магії, тільки прямий доступ до пам\'яті (<strong>Memory-Mapped I/O</strong>). Через адресний простір <strong>MMIO</strong> ми взаємодіємо з периферією як зі звичайними комірками пам\'яті, що потребує точного маніпулювання бітами для конфігурації апаратних модулів.',

        'fw_sec3_title': '3. Принципи реального часу',
        'fw_limits_desc': 'Проектування вбудованих систем базується на принципах реального часу та суворого детермінізму. Це вимагає гарантованого часу відгуку системи на зовнішні події та відмови від механізмів, що вносять неочевидні затримки ( <strong>jitter</strong> ). Використання статичного розподілу ресурсів дозволяє повністю уникнути фрагментації пам\'яті та забезпечити стабільність стеку при виконанні критичних завдань.',

        'fw_stack_title': '4. Архітектурні рівні системи',
        'fw_stack_desc': 'Процес розробки включає роботу з перериваннями (<strong>ISR</strong>), створення шарів абстракції (<strong>HAL</strong>) та використання прямого доступу до пам\'яті (<strong>DMA</strong>), щоб не завантажувати процесор копіюванням байтів. Застосування принципів <strong>SOLID</strong> та шарів <strong>HAL</strong> дозволяє ізолювати логіку від архітектурних особливостей, а використання <strong>DMA</strong> та <strong>ISR</strong> забезпечує асинхронну обробку подій без зайвих витрат тактів CPU.',

        // --- (software.html) ---
        'sw_title': 'Логіка та алгоритми систем',
        'sw_fsm_title': '1. Скінченні автомати (FSM)',
        'sw_fsm_desc': 'Поведінка вбудованих систем базується на теорії автоматів. Ми проектуємо складну логіку через стани та переходи, що гарантує детерміновану поведінку пристрою при будь-яких вхідних сигналах та подіях.',
        'sw_solid_title': '2. SOLID та структурна логіка',
        'sw_solid_desc': 'Застосування <strong>Dependency Injection</strong> дозволяє ізолювати алгоритми обробки даних від фізичних драйверів. Це створює архітектуру, де логіка прийняття рішень повністю відокремлена від способу отримання даних.',
        'sw_cpp_title': '3. Обчислювальні абстракції C++',
        'sw_cpp_desc': 'Використання шаблонів та <strong>constexpr</strong> дозволяє переносити частину обчислень на етап компіляції. Механізми <strong>RAII</strong> забезпечують безпечне керування ресурсами без накладних витрат, властивих високорівневим мовам.',
    },

    'en': {
        // --- NAVIGATION ---
        'nav_name': 'Embedded Systems',
        'nav_home': 'Home',
        'nav_architecture': 'Architecture',
        'nav_firmware': 'Firmware',
        'nav_software': 'Algorithms',
        'nav_sources': 'Sources',
        'switchLang': 'EN',

        // --- Page Titles ---
        'home': 'Embedded Systems: Home',
        'architecture': 'Embedded Systems: Architecture',
        'firmware': 'Embedded Systems: Firmware',
        'software': 'Embedded Systems: Software',
        'sources': 'Embedded Systems: Sources',

        // --- sources links ---
        'source1': 'Google Fonts',
        'source2': 'The Engineering Projects',
        'source3': 'Coursera',
        'source4': 'Embedded.com',
        'source5': 'GeeksforGeeks',

        // --- SIDEBAR (TOOLS) ---
        'sidebar_title': 'Tools',
        'cat_coding': 'Coding Environment',
        'desc_vscode': 'Lightweight & extensible. The daily driver for most engineers.',
        'desc_vs2022': 'Heavyweight IDE. Best for mastering deep C++ concepts.',
        'cat_engineering': 'Engineering',
        'desc_cube': 'The official toolchain for STM32 microcontrollers.',
        'desc_proteus': 'Professional simulation. Test your code and schematics together.',
        'cat_pcb': 'PCB Design',
        'desc_kicad': 'The open-source standard. Design professional boards for free.',
        'desc_altium': 'The premium choice. Used by top companies for complex PCBs.',

        // --- HERO ---
        'hero_title': 'Bring Life to',
        'hero_title_highlight': 'Cold Metal',
        'hero_subtitle': 'Code capable of more than just displaying text. Embedded Systems is applied Computer Science in the real world. Here, algorithms bridge the gap between abstract logic and physical laws.',
        'btn_firmware': 'How it Works',
        'btn_software': 'About it',

        // --- VIDEO ---
        'video_title': 'Embedded Systems in 3 Minutes',
        'video_desc': 'Learn how code interacts with physical components to create smart devices.',
        'video_btn': 'Click to Watch Video',

        // --- CARDS ---
        'card1_title': 'The Spark of Life',
        'card1_desc': 'There is a unique joy when abstract code turns into real action. You write a command, and the physical device blinks, moves, or reacts. It is the magic of creation.',

        'card2_title': 'Valued Expertise',
        'card2_desc': 'Hard skills are always in demand. Because this field requires knowledge of both electronics and code, companies are willing to invest in engineers who bridge these worlds.',

        'card3_title': 'Timeless Knowledge',
        'card3_desc': 'Tech trends change, but physics does not. Understanding how a processor actually works is a fundamental skill that will never go out of style, unlike the latest web framework.',

        'footer_author': 'Made by Dmytro Voitsekhivsky st. group 3CS-25b',

        'mobile_navigation': 'Navigation',

        // --- (architecture.html) ---
        'arch_title': 'Computer System Architecture',
        'arch_isa_title': '1. Instruction Set Architecture (ISA)',
        'arch_isa_desc': 'This is the fundamental contract between the developer and the architecture. <strong>ISA</strong> defines the processor\'s logical model — its set of available registers and memory addressing model. Working with <strong>RISC-V</strong> or <strong>ARM</strong> requires understanding how instructions encode the computing system state, allowing the use of architecture extensions for direct resource management via opcodes.',

        'arch_pipe_title': '2. CPU Pipeline and Datapath',
        'arch_pipe_desc': 'Modern computing units utilize pipelining for parallel command execution, splitting the cycle into stages: <strong>Fetch, Decode, Execute, Writeback</strong>. Understanding this logic allows for analyzing hazards and branch prediction mechanisms. This enables building linear instruction chains that pass through the processor core without stalls.',

        'arch_mem_title': '3. Memory Hierarchy and Locality',
        'arch_mem_desc': 'System performance is limited by the memory hierarchy: from fast registers to <strong>L1/L2</strong> cache and main RAM. The "memory wall" phenomenon necessitates designing cache-friendly data structures. Optimal work with cache lines avoids significant latencies caused by long wait times for a response from the external memory bus.',

        // --- (firmware.html) ---
        'fw_title': 'Firmware: System Interfaces and Architecture Logic',
        'fw_sec1_title': '1. SoC Topology and Architecture',
        'fw_mcu_desc': 'Interaction between the processor core, Flash, and RAM. Analyzing the internal <strong>Bus Matrix</strong> allows for optimizing the instruction fetch path and eliminating bus contention during simultaneous core access to different memory segments. This is the foundation of performance: proper topology ensures system operation without CPU stalls.',

        'fw_sec2_title': '2. Registers and MMIO',
        'fw_reg_desc': 'Architecture is essentially a set of memory addresses. Writing a "1" to a specific register sends current to the pins. No magic, just <strong>Memory-Mapped I/O</strong>. Through the <strong>MMIO</strong> address space, we interact with peripherals as if they were standard memory cells, requiring precise bit manipulation to configure architecture modules.',

        'fw_sec3_title': '3. Real-Time Principles',
        'fw_limits_desc': 'Embedded systems design is based on real-time principles and strict determinism. This requires a guaranteed response time to external events and the rejection of mechanisms that introduce unpredictable delays (<strong>jitter</strong>). Utilizing static resource allocation completely avoids memory fragmentation and ensures stack stability during critical tasks.',

        'fw_stack_title': '4. System Architecture Levels',
        'fw_stack_desc': 'The development process involves working with interrupts (<strong>ISR</strong>), creating Architecture Abstraction Layers (<strong>HAL</strong>), and utilizing Direct Memory Access (<strong>DMA</strong>) to avoid CPU overhead during data copying. Applying <strong>SOLID</strong> principles and <strong>HAL</strong> layers allows for isolating logic from architecture specifics, while <strong>DMA</strong> and <strong>ISR</strong> provide asynchronous event processing without wasting CPU cycles.',

        // --- (software.html) ---
        'sw_title': 'Software Logic & Algorithms',
        'sw_fsm_title': '1. Finite State Machines (FSM)',
        'sw_fsm_desc': 'Embedded systems behavior is rooted in automata theory. We design complex logic using <strong>FSM</strong> (states and transitions), ensuring deterministic system behavior across various input signals and events.',

        'sw_solid_title': '2. SOLID and Structural Logic',
        'sw_solid_desc': 'Utilizing <strong>Dependency Injection</strong> allows for isolating data processing algorithms from physical drivers. This creates an architecture where decision-making logic is decoupled from the method of data acquisition.',

        'sw_cpp_title': '3. Modern C++ Abstractions',
        'sw_cpp_desc': 'Utilizing templates and <strong>constexpr</strong> allows for moving computations to compile-time. <strong>RAII</strong> mechanisms provide safe resource management without the overhead typical of high-level languages.',
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const guidelinesPopup = document.getElementById('guidelinesPopup');
    const acceptButton = document.getElementById('acceptGuidelines');
    const subjectPopup = document.getElementById('subjectPopup');
    const closeSubjectPopup = document.getElementById('closeSubjectPopup');
    const popupSubjectTitle = document.getElementById('popupSubjectTitle');
    const subjectLinks = document.getElementById('subjectLinks');

    // Show guidelines popup initially
    guidelinesPopup.style.display = 'flex';

    // Hide popup on accept button click
    acceptButton.addEventListener('click', function() {
        guidelinesPopup.style.display = 'none';
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animate text elements when they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-text').forEach(el => {
        observer.observe(el);
    });

    // Subject card click event
    document.querySelectorAll('.subject-card').forEach(card => {
        card.addEventListener('click', function() {
            const subject = this.getAttribute('data-subject');
            popupSubjectTitle.textContent = this.querySelector('h3').textContent;
            populateSubjectLinks(subject);
            subjectPopup.style.display = 'flex';
            subjectPopup.style.opacity = '1';
            subjectPopup.querySelector('.subject-popup-content').style.transform = 'translateY(0) scale(1)';
        });
    });

    // Close subject popup
    closeSubjectPopup.addEventListener('click', closeSubjectPopupSmooth);

    // Close popup when clicking outside the content
    subjectPopup.addEventListener('click', function(e) {
        if (e.target === subjectPopup) {
            closeSubjectPopupSmooth();
        }
    });

    function closeSubjectPopupSmooth() {
        subjectPopup.style.opacity = '0';
        subjectPopup.querySelector('.subject-popup-content').style.transform = 'translateY(50px) scale(0.9)';
        setTimeout(() => {
            subjectPopup.style.display = 'none';
        }, 300);
    }

    function populateSubjectLinks(subject) {
        subjectLinks.innerHTML = ''; // Clear existing links

        let links;
        switch(subject) {
            case 'english':
                links = [
                    { type: 'plays', text: 'Plays', url: 'https://docs.google.com/document/d/1N_U6uDSYFh0_RIgz_Qir7ZJznp6xP0MI2mE6XHTdCgU/edit?tab=t.lg231uc2acvs' },
                    { type: 'flashcards', text: 'Flashcards', url: 'https://docs.google.com/document/d/1N_U6uDSYFh0_RIgz_Qir7ZJznp6xP0MI2mE6XHTdCgU/edit?tab=t.ih0hz0ujrmwk' },
                    { type: 'quizzes', text: 'Quizzes', url: 'https://docs.google.com/document/d/1N_U6uDSYFh0_RIgz_Qir7ZJznp6xP0MI2mE6XHTdCgU/edit?tab=t.ih0hz0ujrmwk' },
                    { type: 'notes', text: 'Class Notes', url: 'https://docs.google.com/document/d/1N_U6uDSYFh0_RIgz_Qir7ZJznp6xP0MI2mE6XHTdCgU/edit?tab=t.rv02jx1vwfd0' },
                ];
                break;
            case 'history':
                links = [
                    { type: 'textbook-notes', text: 'Custom Textbook Notes', url: 'https://docs.google.com/document/d/1Q4crLAgvZZEqL6FNIdrKrwK5pJyqtwuFafX4Oirqoio/edit?tab=t.6ktfv436td3o' },
                    { type: 'confirmed-questions', text: 'Confirmed Questions', url: 'https://docs.google.com/document/d/1Q4crLAgvZZEqL6FNIdrKrwK5pJyqtwuFafX4Oirqoio/edit?tab=t.u8u145p0dt9ks' },
                    { type: 'quizzes', text: 'Quizzes', url: 'https://docs.google.com/document/d/1Q4crLAgvZZEqL6FNIdrKrwK5pJyqtwuFafX4Oirqoio/edit?tab=t.5wnxe8323ezt' },
                    { type: 'notes', text: 'Class Notes', url: 'https://docs.google.com/document/d/1Q4crLAgvZZEqL6FNIdrKrwK5pJyqtwuFafX4Oirqoio/edit?tab=t.qp8m6t5qforl' },
                    { type: 'flashcards', text: 'Flashcards', url: 'https://docs.google.com/document/d/1Q4crLAgvZZEqL6FNIdrKrwK5pJyqtwuFafX4Oirqoio/edit?tab=t.m1t2u7lwkgvx' }
                ];
                break;
            case 'Spanish 2':
                links = [
                    { type: 'notebook-notes', text: 'Notebook Notes', url: 'https://example.com/languages/notebook-notes' },
                    { type: 'flashcards', text: 'Flashcards', url: '' },
                    { type: 'quizzes', text: 'Quizzes', url: 'https://example.com/languages/quizzes' },
                    { type: 'notes', text: 'Class Notes', url: 'https://example.com/languages/notes' },
                ];
                break;
            case 'geometry':
                links = [
                    { type: 'custom-notes', text: 'Custom Notes', url: 'https://docs.google.com/document/d/1goCyPCBvME9YrFfN0HoskD7CAhSMtmKWUOjP6xDFmMo/edit?tab=t.1001gzuwc4rb' },
                    { type: 'quizzes', text: 'Quizzes', url: 'https://docs.google.com/document/d/1goCyPCBvME9YrFfN0HoskD7CAhSMtmKWUOjP6xDFmMo/edit?tab=t.ck0mqcq7c0sl' },
                    { type: 'notes', text: 'Class Notes', url: 'https://docs.google.com/document/d/1goCyPCBvME9YrFfN0HoskD7CAhSMtmKWUOjP6xDFmMo/edit?tab=t.qqgbtzzg02hi' },
                    { type: 'Important definitions', text: 'Important definitions', url: 'https://docs.google.com/document/d/1goCyPCBvME9YrFfN0HoskD7CAhSMtmKWUOjP6xDFmMo/edit?tab=t.3kql1fgqg5ud' }
                ];
                break;
            case 'biology':
                links = [
                    { type: 'notes', text: 'Class Notes', url: 'https://docs.google.com/document/d/15OEFTTkNiRt3Affvp_B51qunCTP027Su09sqZ7cef1A/edit?tab=t.hg3jw0678hjt' },
                    { type: 'quizzes', text: 'Practice Quizzes/Tests', url: 'https://docs.google.com/document/d/15OEFTTkNiRt3Affvp_B51qunCTP027Su09sqZ7cef1A/edit?tab=t.3s59lrhorec' },
                    { type: 'flashcards', text: 'Flashcards', url: 'https://docs.google.com/document/d/15OEFTTkNiRt3Affvp_B51qunCTP027Su09sqZ7cef1A/edit?tab=t.hg3jw0678hjt' },
                    { type: 'lab-reports', text: 'Textbook notes', url: 'https://example.com/biology/textbook-notes' },
                ];
                break;
            default:
                links = [
                    { type: 'notes', text: 'Textbook & Class Notes', url: 'https://docs.google.com/document/d/1PkNPdBKMbGl5bYe6-jl1a1URUriGnDKsCNejGlg-1FA/edit?tab=t.ngd8q1out4of' },
                    { type: 'quizzes', text: 'Quizzes & Tests', url: 'https://docs.google.com/document/d/1PkNPdBKMbGl5bYe6-jl1a1URUriGnDKsCNejGlg-1FA/edit?tab=t.283cnksojw3i' },
                    { type: '200 + Flashcards', text: '200+ Flashcard Decks', url: 'https://docs.google.com/document/d/1PkNPdBKMbGl5bYe6-jl1a1URUriGnDKsCNejGlg-1FA/edit?tab=t.u1czct13aj5z' }
                ];
        }

        links.forEach(link => {
            const linkElement = document.createElement('a');
            linkElement.href = link.url;
            linkElement.className = 'subject-link';
            linkElement.textContent = link.text;
            linkElement.target = "_blank"; // Opens in a new tab
            subjectLinks.appendChild(linkElement);
        });
    }
});
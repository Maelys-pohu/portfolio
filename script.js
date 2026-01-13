// Gestion des Modals (Pop-ups de projets)
function openModal(projectId) {
    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalLink = document.getElementById('modalLink'); 
    const photoGallery = document.getElementById('photoGallery');
    photoGallery.innerHTML = ''; 

    let projectData = {};

    switch (projectId) {
        case 'projet1':
            projectData = {
                title: 'Marvel Inventory',
                description: 'Le projet Marvel Inventory a été réalisé individuellement durant le second semestre de ma première année de BUT MMI, entre janvier et juin 2025. L\'objectif était de concevoir un site web d\'inventaire, me permettant de mettre en œuvre principalement mes compétences en gestion de base de données et en développement front-end. Pour cela, j\'ai utilisé différents langages tels que HTML, CSS, PHP, JavaScript et MySQL, afin d\'intégrer une base de données et de mettre en place une communication efficace entre celle-ci et le site. Le projet demandait également une dimension créative, j\'ai développé un univers visuel cohérent et complet, tout en respectant les règles de qualité OPQUAST. J\'ai pû aussi créer un logo à l\'aide d\'Adobe Illustrator et me suis appuyée sur des recherches d\'inspirations, afin de retranscrire l\'identité de Marvel, qu\'elle soit issue des comics ou des adaptations cinématographiques.',
                link: 'https://webinventory.pohu.projetsmmichamps.fr/',
            };
            break;
        case 'projet2':
            projectData = {
                title: 'Dataviz',
                description: 'Le projet Datafem devait être réalisé de septembre à novembre 2025. L\'objectif était de créer une page web dynamique et interactive pour visualiser l\'évolution d\'un phénomène social ou culturel. Nous avons choisi d\'analyser l\'évolution de la notoriété des femmes artistes dans le monde au fil des ans. L\'ensemble du projet, de la recherche à la conception, a été réalisé collectivement. La phase de mise en œuvre de la visualisation m\'a permis de développer mes compétences en analyse de données, en conception UX/UI spécifique à la data-visualisation, ainsi qu\'en narration visuelle pour transformer des statistiques brutes en un récit percutant et engageant. Pour ce projet nous avons pris les données depuis Wikidata et utilisés les langages HTML, CSS et Javascript pour sa conception, tout en prenant soins de respecter les régles de qualité OPQUAST.',
                link: 'https://thdw04.github.io/Datafem/',
            };
            break;
        case 'projet3':
            projectData = {
                title: 'Le portail des saveurs',
                description: 'Ce projet a été mené collectivement durant mon troisième semestre de BUT MMI entre septembre et décembre 2025. L\'objectif était de réaliser un court-métrage d\'environ une minute trente, en intégrant un scénario qui varie entre la réalité et la fiction grâce à de l\'incrustation fond vert. Bien que le tournage ait été collectif, le montage, lui, a été individuel, me permettant d\'y ajouter ma propre identité à travers un montage unique. Ce projet m\'a permis de développer mes compétences en narration visuelle et sonore pour créer une transition créative et percutante entre le réel et le fictif, en plus de renforcer ma maîtrise de la post-production avec Premiere Pro et de l\'intégration d\'éléments sonores spécifiques créés pour l\'occasion.',
                link: 'https://youtu.be/-EHbABL5WH0',
            };
            break;
        case 'projet4':
            projectData = {
                title: 'Interview',
                description: 'Le projet "Interview" a été mené en groupe de cinq étudiant(e)s, durant le premier semestre de ma première année de BUT MMI, entre septembre et décembre 2024. L\'objectif était de réaliser l\'interview d\'un(e) journaliste issu(e) du média de notre choix. Nous avons conçu collectivement l\'ensemble du projet, de l\'élaboration des questions à la prise de vue. La phase de montage, quant à elle, était individuelle et devait être effectuée à l\'aide du logiciel Adobe Premiere Pro. Ce projet m\'a permis de développer mes compétences en préparation d\'interview, en structuration du récit audiovisuel et en montage vidéo, tout en expérimentant le travail d\'équipe.',
                link: 'https://www.youtube.com/watch?v=dIOn4nTO6WI',
            };
            break;
        case 'projet5':
            projectData = {
                title: 'Photographie',
                description: 'Quelques clichés pris lors de mes voyages et balades.',
                photos: ['vintage.jpeg', 'tenerife.jpeg', 'rue.png','portugal.jpeg', 'normandie.png', 'fleur.png','chateau.jpeg'] 
                
            };
            break;
        case 'projet6':
            projectData = {
                title: 'À table !',
                description: 'Ce projet, à réalisé entre septembre 2025 et janvier 2026, consistait concevoir et développer une plateforme web participative dédiée à la cuisine et à la gastronomie. L\'objectif était de créer un espace communautaire vivant et interactif, permettant aux utilisateurs de proposer du contenu (recettes, astuces) et d\'interagir entre eux. Ce projet, réalisé au format MVP (Minimum Viable Product), m\'a d\'abord permis de me perfectionné dans la création de site web à l\'aide de différents langages (PHP, Javascript, HTLML,\ CSS) en un temps record car il a fallu le développer en 3 semaines. Mais aussi me permettre de développer mes compétences en architecture de l\'information et en développement full stack, notamment sur la mise en œuvre d\'un back-office, la gestion des profils utilisateurs différenciés, et l\'assurance de la responsivité de la plateforme. En respectant les standards du web (OPQUAST), j\'ai pu transformer des exigences fonctionnelles complexes en une solution concrète et hébergée.',
                link: 'http://letuscook.fr/accueil_non_co.php',
            };
            break;
        case 'projet7':
            projectData = {
                title: 'Nanterre Basketball',
                description: 'Ce projet, réalisé en collaboration, consistait à la réalisation d\'une campagne de communication institutionnelle globale visant à valoriser l\'attractivité économique ou touristique d\'une commune française au travers d\'un événement culturel. Notre objectif était de concevoir une identité visuelle complète et de produire un ensemble de maquettes multi-supports. Cela incluait la création de bannières web, d\'une affiche de campagne, d\'une page d\'accueil de site web responsive (mobile, tablette, ordinateur). Ce travail a nécessité une maîtrise des outils de conception graphique et une adaptation aux contraintes de formats pour l\'impression et le digital, tout en assurant la cohérence visuelle de la campagne. Pour ce projet nous avons utilisés plusieurs outils tels que Figma, Photoshop et Illustrator',
                link: 'campagne_de_communication_ntr_compressed.pdf', 
                fileType: 'pdf', 
            };
            break;
        case 'projet8':
            projectData = {
                title: 'Créations personnelles',
                description: 'Ces créations ont été réalisées dans un cadre personnel. Avec mes camarades, nous avons choisi de nous lancer des challenges créatifs sur une courte durée, dans une démarche libre et autonome. L’objectif était d’exprimer pleinement notre créativité, sans contraintes pédagogiques ni directives imposées, afin d’explorer nos idées, nos univers personnels et de produire des projets authentiques destinés à enrichir notre portfolio.',
                photos: ['affiche_venom.png'],
            };
            break;
        case 'projet9':
            projectData = {
                title: 'Clan du Néon',
                description: 'Le projet « Clan du Néon » consistait en la refonte stratégique et graphique complète de la communication d\'un collectif dont la présence et l\'identité visuelle étaient peu développées. Notre mission, entre janvier et juin 2025, était de structurer et dynamiser leur image pour mieux atteindre leur public cible et affirmer leur positionnement. Nous avons commencé par définir une nouvelle identité visuelle forte incluant la création d\'un logo moderne et d\'une charte graphique détaillée. La mise en œuvre s\'est traduite par la conception et le développement d\'un site web sous WordPress, offrant une plateforme professionnelle et ergonomique pour le collectif. Parallèlement, nous avons produit des supports promotionnels variés : un motion design percutant pour les réseaux sociaux, des articles de presse pour assurer une couverture médiatique, ainsi que divers mockups illustrant l\'application de la nouvelle identité sur différents supports (papeterie, merchandising, etc.). Ce projet nous a permit de développer, en groupe, l\'ensemble de nos compétences en création et communication afin de transformer une communication fragmentée en une stratégie cohérente et multi-canal.',
                link: 'https://clanduneon.saidmze.projetsmmichamps.fr/',
            };
            break;
    }

    modalTitle.textContent = projectData.title;
    modalDescription.textContent = projectData.description;

    // LOGIQUE DE GESTION ET D'AFFICHAGE/MASQUAGE DU LIEN DE PROJET
    if (projectData.link && projectData.link !== '#') {
        modalLink.style.display = 'inline-block'; 
        modalLink.href = projectData.link;

        if (projectData.fileType === 'pdf') {
            modalLink.textContent = 'Entrer dans le projet';
            modalLink.target = '_blank'; 
        } else {
            modalLink.textContent = 'Entrez dans le projet'; 
            modalLink.target = '_blank'; 
        }

    } else {
        modalLink.style.display = 'none'; 
    }

    if (projectData.photos && projectData.photos.length > 0) {
        const thumbnailsContainer = document.createElement('div');
        thumbnailsContainer.classList.add('photo-thumbnails');
        
        projectData.photos.forEach(photoSrc => {
            const img = document.createElement('img');
            img.src = photoSrc; 
            img.alt = `Aperçu du projet ${projectData.title}`;
            img.classList.add('thumbnail-img');
            img.onclick = () => zoomImage(photoSrc); 
            thumbnailsContainer.appendChild(img);
        });
        photoGallery.appendChild(thumbnailsContainer);
    }

    modal.classList.add('active');
}

function closeModal() {
    document.getElementById('projectModal').classList.remove('active');
}
function flipCard(cardElement) {
    cardElement.classList.toggle('flipped');
}

// --- FONCTION DE ZOOM D'IMAGE ---
function zoomImage(imageSrc) {
    const zoomModal = document.createElement('div');
    zoomModal.style.position = 'fixed';
    zoomModal.style.top = '0';
    zoomModal.style.left = '0';
    zoomModal.style.width = '100%';
    zoomModal.style.height = '100%';
    zoomModal.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    zoomModal.style.zIndex = '99999';
    zoomModal.style.display = 'flex';
    zoomModal.style.alignItems = 'center';
    zoomModal.style.justifyContent = 'center';
    zoomModal.style.cursor = 'pointer';
    const zoomedImg = document.createElement('img');
    zoomedImg.src = imageSrc;
    zoomedImg.style.maxWidth = '90%';
    zoomedImg.style.maxHeight = '90%';
    zoomedImg.style.display = 'block'; 
    zoomedImg.style.borderRadius = '15px';

    // Ajoute l'image au conteneur de la modale
    zoomModal.appendChild(zoomedImg);
    
    // Ajoute la modale de zoom au corps du document
    document.body.appendChild(zoomModal);

    // Ferme la modale lorsque l'utilisateur clique dessus
    zoomModal.onclick = function() {
        document.body.removeChild(zoomModal);
    };
}
// Gestion de la navigation animée
document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.item');
    const sections = document.querySelectorAll('section[id]');

    // --- RESTAURATION DE LA POSITION ET DU FILTRE ---
    const hasVisited = sessionStorage.getItem('hasVisited');
    const savedScrollPosition = sessionStorage.getItem('scrollPosition');
    const savedFilter = sessionStorage.getItem('activeFilter');

    if (hasVisited === 'true') {
        const introScreen = document.getElementById('intro-screen');
        if (introScreen) {
            introScreen.style.display = 'none';
        }
        const notificationContainer = document.querySelector('.notification-container');
        if (notificationContainer) {
            notificationContainer.classList.add('active');
        }
        if (savedScrollPosition) {
            setTimeout(() => {
                window.scrollTo(0, parseInt(savedScrollPosition));
            }, 100);
        }

        if (savedFilter) {
            setTimeout(() => {
                const filterButton = document.querySelector(`.filtres button[data-filter="${savedFilter}"]`);
                if (filterButton) {
                    filterButton.click();
                }
            }, 150);
        }
    } else {
        sessionStorage.setItem('hasVisited', 'true');
    }
    function activateNavItem(index) {
        menuItems.forEach(item => item.classList.remove('active'));
        if (menuItems[index]) {
            menuItems[index].classList.add('active');
        }
    }
    menuItems.forEach((item, index) => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('data-section');
            const targetSection = document.getElementById(sectionId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
                activateNavItem(index);
            }
        });
    });

    // Détection du scroll pour activer automatiquement la section visible
    let isScrolling;
    window.addEventListener('scroll', function() {
        window.clearTimeout(isScrolling);
        
        isScrolling = setTimeout(function() {
            let currentSectionIndex = 0;

            sections.forEach((section, index) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 200) { 
                    currentSectionIndex = index;
                }
            });
            activateNavItem(currentSectionIndex);
        }, 100); 
        checkCompetencesVisibility();
    });

    // Gestion de l'écran d'introduction 
    const introScreen = document.getElementById('intro-screen');
    const notificationContainer = document.querySelector('.notification-container');
    
    if (introScreen) {
        setTimeout(() => {
            introScreen.classList.add('fade-out');
            
            // Afficher la notification immédiatement
            if (notificationContainer){
                notificationContainer.classList.add('active');
            }
            
            // Retirez l'élément du DOM APRES la transition
            setTimeout(() => {
                introScreen.style.display = 'none';
            }, 1000); 
            
        }, 2000); 
    }
    else if (notificationContainer){
        notificationContainer.classList.add('active');
    }

    // --- GESTION DES BARRES DE PROGRESSION ANIMÉES ---
    const competencesSection = document.getElementById('qui-suis-je');
    const progressBars = document.querySelectorAll('.progress-bar');
    let hasAnimated = false; 

    function animateProgressBars() {
        progressBars.forEach(bar => {
            const level = bar.getAttribute('data-skill-level'); 
            const parentItem = bar.closest('.competence-item');
            const skillLabel = parentItem ? parentItem.querySelector('.skill-label') : null;
            bar.style.width = level + '%';
            if (skillLabel) {
                let originalText = skillLabel.textContent;
                if (!originalText.includes('(')) {
                    skillLabel.textContent = originalText.trim() + ` (${level}%)`;
                }
            }
        });
        hasAnimated = true; 
    }

    function checkCompetencesVisibility() {
        if (!competencesSection || hasAnimated) return; 
        
        const rect = competencesSection.getBoundingClientRect();
        
        // Déclenche l'animation lorsque le haut de la section arrive dans les 90% de la fenêtre
        const triggerOffset = (window.innerHeight || document.documentElement.clientHeight) * 0.60; 
        const isVisible = (rect.top <= triggerOffset);

        if (isVisible) {
            animateProgressBars();
        } 
    }
    window.addEventListener('load', checkCompetencesVisibility);

    // --- GESTION DES FILTRES DE PROJETS ---
    const filterButtons = document.querySelectorAll('.filtres button');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Retirer la classe active de tous les boutons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Ajouter la classe active au bouton cliqué
            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter');
            
            f
            sessionStorage.setItem('activeFilter', filterValue);

            projectCards.forEach(card => {
                const projectItem = card.querySelector('.projet-item');
                const category = projectItem.getAttribute('data-category');

                
                if (filterValue === 'Tous') {
                    card.style.display = 'block';
                } 
                
                else if (category === filterValue) {
                    card.style.display = 'block';
                } 
                
                else {
                    card.style.display = 'none';
                }
            });
        });
    });

    const projectLinks = document.querySelectorAll('.project-link');
    projectLinks.forEach(link => {
        link.addEventListener('click', function() {
            sessionStorage.setItem('scrollPosition', window.scrollY);
        });
    });

    let scrollTimeout;
    window.addEventListener('scroll', function() {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            sessionStorage.setItem('scrollPosition', window.scrollY);
        }, 200);
    });


const subtitleElement = document.getElementById('typing-subtitle');
const textToType = "by Maëlys";
let index = 0;


if (subtitleElement) {
    subtitleElement.textContent = ""; 
}

function typeWriter() {
    if (index < textToType.length) {
        subtitleElement.textContent += textToType.charAt(index);
        index++;
        setTimeout(typeWriter, 150); 
    } else {

        setTimeout(() => {
            const intro = document.getElementById('intro-screen');
            if (intro) intro.classList.add('fade-out');
        }, 12000);
    }
}

setTimeout(typeWriter, 200);


});
    // --- GESTION DES FILTRES DE PROJETS ---
    const filterButtons = document.querySelectorAll('.filtres button');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Retirer la classe active de tous les boutons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Ajouter la classe active au bouton cliqué
            this.classList.add('active');
            const filterValue = this.getAttribute('data-filter');
            sessionStorage.setItem('activeFilter', filterValue);

            projectCards.forEach(card => {
                const projectItem = card.querySelector('.projet-item');
                const category = projectItem.getAttribute('data-category');

                // Afficher tous les projets si "Tous" est sélectionné
                if (filterValue === 'Tous') {
                    card.style.display = 'block';
                } 
                // Sinon, afficher uniquement les projets correspondant à la catégorie
                else if (category === filterValue) {
                    card.style.display = 'block';
                } 
                // Cacher les projets qui ne correspondent pas
                else {
                    card.style.display = 'none';
                }
            });
        });
    });

    const projectLinks = document.querySelectorAll('.project-link');
    projectLinks.forEach(link => {
        link.addEventListener('click', function() {
            sessionStorage.setItem('scrollPosition', window.scrollY);
        });
    });

    let scrollTimeout;
    window.addEventListener('scroll', function() {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            sessionStorage.setItem('scrollPosition', window.scrollY);
        }, 200);
    });
document.addEventListener("DOMContentLoaded", function() {
    const title = document.querySelector("#qui-suis-je h2");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active-line");
        } else {
            entry.target.classList.remove("active-line");
            }
        });
    }, { threshold: 0.5 }); 

    observer.observe(title);
});
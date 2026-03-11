const eventData = {
    "3rd": [
        { 
            title: "MVP (Most Valuable Player)", 
            desc: "Joining the MVP was a fun experience for me. I did not place in the event, yet I still felt happy because I formed friendships with candidates from other grade levels. The activity helped me meet new people and enjoy the moment despite the result.", 
            imgs: ["mvp1.jpg", "mvp2.jpg"],  
        },
        { 
            title: "V-POP", 
            desc: "The V-POP experience was enjoyable for me. Each practice session filled with laughter and teamwork. Those moments made the preparation memorable and strengthened our connection as a section.", 
            imgs: ["vpop1.jpg", "vpop2.jpg"],  
        },
        { 
            title: "Christmas Party", 
            desc: "The Christmas Party brought joy to our class. The games, food, and gift exchanges created a place where everyone shared smiles and laughter. The celebration helped us relax and spend meaningful time together as classmates.", 
            imgs: ["cparty1.jpg", "cparty2.jpg"], 
        }
    ],
    "4th": [
        { 
            title: "Miting de Avance", 
            desc: "The Miting de Avance gave me the chance to listen to the candidates and understand their plans for the school. Each group shared their ideas and goals for leadership. The event helped me realize the importance of choosing leaders who represent the students well.", 
            imgs: ["mda1.jpg", "mda2.jpg"], 
        },
        { 
            title: "Streetdance", 
            desc: "The Streetdance competition showed the effort and teamwork behind every performance. Each group practiced hard to present synchronized movements and creative choreography. Watching the performances made me appreciate the dedication and cooperation needed in dance.", 
            imgs: ["sd1.jpg", "sd2.jpg"], 
        },
        { 
            title: "BOTB (Battle of the Bands)", 
            desc: "Battle of the Bands highlighted the musical talent of students in our school. Each band performed with confidence and passion in front of the audience. The event allowed students to express their creativity through music and showed the effort required to perform live on stage.", 
            imgs: ["botb1.jpg", "botb2.jpg"], 
        }
    ]
};

window.onload = () => {
    const params = new URLSearchParams(window.location.search);
    const q = params.get('q') || '3rd';

    const backBtn = document.getElementById('dynamic-back');
    if (backBtn) {
        backBtn.href = `index.html?view=${q}`;
        backBtn.innerText = `← Back to ${q} Quarter Page`;
    }
    
    document.getElementById('header-title').innerText = `${q} Quarter Events`;

    const list = document.getElementById('events-list');
    if (eventData[q]) {
        list.innerHTML = ''; 
        eventData[q].forEach(ev => {
            const card = document.createElement('div');
            card.className = 'event-card';
            card.innerHTML = `
                <h2>${ev.title}</h2>
                <div class="explanation">${ev.desc}</div>
                <div class="media-grid">
                    <img src="${ev.imgs[0]}" alt="${ev.title}" onerror="this.src='https://via.placeholder.com/400x250?text=Event+Photo'">
                    <img src="${ev.imgs[1]}" alt="${ev.title}" onerror="this.src='https://via.placeholder.com/400x250?text=Event+Photo'">
                </div>
            `;
            list.appendChild(card);
        });
    }
};
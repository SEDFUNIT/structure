const staffData = [
    {
        name: "นายสมชาย ใจดี",
        position: "ผู้จัดการฝ่าย",
        department: "การตลาด",
        photo: "employee1.jpg"
    },
    {
        name: "นางสาวมณีรัตน์ สง่า",
        position: "ผู้ช่วยผู้จัดการ",
        department: "ทรัพยากรบุคคล",
        photo: "employee2.jpg"
    }
];

const staffGrid = document.querySelector('.staff-grid');

staffData.forEach(staff => {
    const staffCard = document.createElement('div');
    staffCard.classList.add('staff-card');
    
    staffCard.innerHTML = `
        <img src="${staff.photo}" alt="รูปพนักงาน" class="staff-photo">
        <h2>${staff.name}</h2>
        <p>ตำแหน่ง: ${staff.position}</p>
        <p>กลุ่มงาน: ${staff.department}</p>
    `;
    
    staffGrid.appendChild(staffCard);
});
const icons = document.querySelectorAll('.icon');

icons.forEach(icon => {
    const x = Math.random() * 90; // ขอบเขต 0% ถึง 90%
    const y = Math.random() * 90; // ขอบเขต 0% ถึง 90%
    icon.style.left = `${x}%`;
    icon.style.top = `${y}%`;
});

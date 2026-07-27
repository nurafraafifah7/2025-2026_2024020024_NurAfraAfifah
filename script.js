$(document).ready(function() {
    
    // ==========================================
    // 1. LOGIKA NAVIGASI PINDAH HALAMAN (SPA)
    // ==========================================
    $('.nav-btn').on('click', function(e) {
        e.preventDefault(); 

        var targetPage = $(this).attr('data-target');

        if (!targetPage) return;

        // Sembunyikan & tampilkan halaman target
        $('.page-section').removeClass('active');
        $('#' + targetPage).addClass('active');

        // Atur status aktif di link navigasi utama
        $('.nav-links a').removeClass('active');
        $('.nav-links a[data-target="' + targetPage + '"]').addClass('active');

        // Smooth scroll ke atas
        $('html, body').animate({ scrollTop: 0 }, 'fast');
    });

});

// ==========================================
// 2. DATA & LOGIKA MODAL PRODI
// ==========================================
const prodiData = {
    ti: {
        title: "S1 Teknik Informatika",
        visi: "Menjadi program studi unggulan yang berdaya saing global dalam bidang rekayasa perangkat lunak dan multimedia berbasis technopreneurship pada tahun 2027.",
        misi: [
            "Menyelenggarakan, membina dan mengembangkan sistem pendidikan yang berdaya saing nasional untuk menyiapkan sumber daya manusia berkeahlian RPL & Multimedia.",
            "Menyelenggarakan kegiatan penelitian berkontribusi pada pengembangan IPTEK bidang RPL dan multimedia.",
            "Menyelenggarakan pengabdian masyarakat melalui pemanfaatan TIK untuk meningkatkan kualitas hidup masyarakat."
        ],
        tujuan: [
            "Mencetak sarjana komputer kompeten & siap kerja di bidang RPL dan Multimedia.",
            "Menghasilkan inovasi IPTEK tepat guna bagi industri perangkat lunak.",
            "Menerapkan keilmuan informatika untuk digitalisasi masyarakat.",
            "Membentuk lulusan yang mampu menciptakan lapangan kerja (Technopreneur)."
        ],
        keunggulan: [
            "Kurikulum Dual-Focus (Software Engineering + Multimedia).",
            "Berbasis Technopreneurship untuk komersialisasi produk digital.",
            "Target Capaian Global 2027 dengan orientasi standar internasional."
        ]
    },
    sk: {
        title: "S1 Sistem Komputer (Akreditasi B)",
        visi: "Menjadi program studi sistem komputer yang unggul dalam menghasilkan lulusan dalam bidang sistem cerdas, robotika, sistem tertanam, keamanan jaringan komputer, internet of things (IoT) dan berjiwa Technopreneurship.",
        misi: [
            "Menyelenggarakan pendidikan sistem komputer berkualitas, inovatif, dan berbasis kewirausahaan.",
            "Memfasilitasi sivitas akademika mencapai mutu penelitian handal dan kompetitif.",
            "Melaksanakan pengabdian masyarakat demi pemberdayaan dan peningkatan kualitas hidup."
        ],
        tujuan: [
            "Menghasilkan lulusan yang menguasai IPTEK sistem komputer untuk kegiatan produktif.",
            "Mengkaji dan mengembangkan ilmu dasar/terapan serta metodologi penelitian IT.",
            "Pemberdayaan SDM dan SDA melalui penerapan layanan teknologi informasi profesional."
        ],
        infoKhusus: "Membuka 2 Pilihan Kelas: Kelas Reguler (08.00 - 17.00 WITA) & Kelas Malam (17.00 - 22.00 WITA)."
    },
    si: {
        title: "S1 Sistem Informasi (Akreditasi B)",
        visi: "Menjadi Program Studi Sistem Informasi yang unggul di Indonesia pada bidang ekonomi kreatif dan ICT berbasis technopreneurship pada tahun 2027.",
        misi: [
            "Menyelenggarakan pendidikan sistem informasi berkualitas dan berbasis kewirausahaan.",
            "Meningkatkan mutu penelitian bidang sistem informasi yang handal dan kompetitif.",
            "Melaksanakan pengabdian masyarakat berbasis pemanfaatan teknologi informasi."
        ],
        tujuan: [
            "Menghasilkan lulusan yang menguasai bidang sistem informasi untuk sektor publik & bisnis.",
            "Mengembangkan metodologi penelitian teknologi informasi yang paripurna.",
            "Menyebarluaskan ilmu pengetahuan & teknologi untuk pemberdayaan masyarakat."
        ]
    },
    hukum: {
        title: "S1 Hukum",
        visi: "Menjadi program studi hukum unggulan di kawasan Indonesia Timur berbasis cyber law berwawasan technopreneurship.",
        misi: [
            "Menyelenggarakan pendidikan ilmu hukum terkini berfokus Cyber Law dan nilai Pancasila.",
            "Menyelenggarakan penelitian hukum inovatif yang berkontribusi pada hukum nasional.",
            "Memberikan pengabdian hukum guna meningkatkan kesadaran hukum masyarakat.",
            "Mendorong kolaborasi antar lembaga untuk praktik hukum profesional."
        ]
    },
    ap: {
        title: "S1 Administrasi Publik",
        visi: "Menjadi Program Studi Administrasi Publik yang unggul dan terpercaya di bidang Kebijakan Publik, Kelembagaan, Manajemen Sektor Publik dan Keuangan Publik berbasis E-Government.",
        misi: [
            "Pendidikan Administrasi Publik berkualitas & berjiwa technopreneurship.",
            "Penelitian inovatif bidang tata kelola Swasta maupun Pemerintahan.",
            "Penerapan hasil penelitian bagi kesejahteraan institusi dan masyarakat.",
            "Tata kelola prodi yang transparan, akuntabel, dan kredibel."
        ],
        tujuan: [
            "Birokrat Modern (ASN, POLISI, TNI, BUMN) dengan penguasaan E-Government.",
            "Analis Kebijakan Publik berbasis teknologi informasi.",
            "Administrator & Manajer Organisasi Publik operasional.",
            "Pengelola Kegiatan Sektor Publik & Non-Profit."
        ]
    },
    kwu: {
        title: "S1 Kewirausahaan",
        visi: "Menjadi program studi kewirausahaan yang unggul, inovatif, dan berdaya saing global dalam mencetak wirausahawan muda berbasis teknologi dan nilai-nilai lokal pada tahun 2035.",
        misi: [
            "Pendidikan kewirausahaan berbasis teori dan praktik bisnis modern.",
            "Penelitian di bidang kewirausahaan, ekonomi kreatif, dan Startup digital.",
            "Pengabdian masyarakat melalui pemberdayaan UMKM dan pelaku usaha lokal.",
            "Tata kelola prodi transparan, akuntabel, dan berlayanan prima."
        ]
    },
    pti: {
        title: "S1 Pendidikan Teknologi Informasi",
        visi: "Menjadi program studi unggulan dalam menghasilkan pendidik dan profesional teknologi informasi yang andal dalam merekayasa teknologi pendidikan berbasis iptek, serta berwawasan inklusi sosial pada tingkat nasional tahun 2031.",
        misi: [
            "Pendidikan IPTEK berfokus RPL & Arsitektur Sistem Pembelajaran (Edutech) berwawasan inklusi sosial.",
            "Penelitian terapan pembuatan prototype aplikasi & platform edukasi adaptif.",
            "Diseminasi inovasi teknologi pendidikan untuk memecahkan kesenjangan akses digital masyarakat marginal."
        ]
    },
    s2sk: {
        title: "S2 Sistem Komputer (Pascasarjana)",
        visi: "Menjadi suatu pendidikan tindak lanjut magister berbasis entrepreneurship yang dapat bersaing dengan program pascasarjana di universitas terkemuka di Indonesia.",
        misi: [
            "Pendidikan magister komputer berkualitas untuk lulusan kreatif, profesional & berjiwa wirausaha.",
            "Penelitian berorientasi integrasi teknologi baru yang bermanfaat bagi masyarakat.",
            "Mengimplementasikan nilai-nilai moral, akademisi, dan sosial masyarakat."
        ],
        keunggulan: [
            "Terakreditasi BAIK dari LAM INFOKOM.",
            "Meluluskan 400+ Alumni M.Kom. yang berprofesi sebagai ASN, Manager, Dosen & Konsultan IT.",
            "Dosen & Tenaga Pengajar kualifikasi Doktoral lulusan Luar Negeri."
        ]
    }
};

// SWITCH TAB PRODI
function switchProdiTab(event, tabId) {
    const tabBtns = document.querySelectorAll('.prodi-tab-btn');
    const tabContents = document.querySelectorAll('.prodi-tab-content');

    tabBtns.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    event.currentTarget.classList.add('active');
    document.getElementById(tabId).classList.add('active');
}

// BUKA MODAL PRODI
function openProdiModal(prodiKey) {
    const data = prodiData[prodiKey];
    if (!data) return;

    let html = `<h2 class="modal-prodi-title">${data.title}</h2>`;

    if (data.visi) {
        html += `
            <div class="modal-section-title"><i class="fa-solid fa-eye"></i> VISI</div>
            <p class="modal-text-p">${data.visi}</p>
        `;
    }

    if (data.misi && data.misi.length > 0) {
        html += `<div class="modal-section-title"><i class="fa-solid fa-bullseye"></i> MISI</div><ul class="modal-list">`;
        data.misi.forEach(item => {
            html += `<li><i class="fa-solid fa-check"></i> <span>${item}</span></li>`;
        });
        html += `</ul>`;
    }

    if (data.tujuan && data.tujuan.length > 0) {
        html += `<div class="modal-section-title"><i class="fa-solid fa-crosshair"></i> TUJUAN</div><ul class="modal-list">`;
        data.tujuan.forEach(item => {
            html += `<li><i class="fa-solid fa-circle-dot"></i> <span>${item}</span></li>`;
        });
        html += `</ul>`;
    }

    if (data.keunggulan && data.keunggulan.length > 0) {
        html += `<div class="modal-section-title"><i class="fa-solid fa-star"></i> KEUNGGULAN</div><ul class="modal-list">`;
        data.keunggulan.forEach(item => {
            html += `<li><i class="fa-solid fa-star text-warning"></i> <span>${item}</span></li>`;
        });
        html += `</ul>`;
    }

    if (data.infoKhusus) {
        html += `
            <div class="modal-section-title"><i class="fa-solid fa-circle-info"></i> INFORMASI PERKULIAHAN</div>
            <p class="modal-text-p">${data.infoKhusus}</p>
        `;
    }

    document.getElementById('prodiModalBody').innerHTML = html;
    document.getElementById('prodiModal').style.display = 'block';
}

// TUTUP MODAL PRODI
function closeProdiModal() {
    document.getElementById('prodiModal').style.display = 'none';
}


// ==========================================
// 3. DATA & LOGIKA MODAL BERITA
// ==========================================
const newsData = {
    news1: {
        title: "Dosen Universitas Handayani Makassar Berkontribusi dalam PKM Nasional ADPERTISI, Dorong Digitalisasi Pertanian dan Penguatan Koperasi Desa",
        date: "1 Juli 2026",
        category: "Akademik",
        image: "images/Berita1.png",
        content: `
            <p>Maros – Dosen Universitas Handayani Makassar kembali menunjukkan komitmennya dalam mengimplementasikan Tri Dharma Perguruan Tinggi melalui partisipasi pada Pengabdian kepada Masyarakat (PKM) Nasional ADPERTISI Tahun 2026 yang dilaksanakan di Desa Marannu, Kabupaten Maros. Kegiatan ini menjadi wadah kolaborasi dosen dari berbagai perguruan tinggi dalam memberikan edukasi dan pendampingan kepada masyarakat terkait pemanfaatan teknologi untuk mendukung pembangunan desa.</p><br>
            <p>PKM Nasional ADPERTISI mengangkat tema digitalisasi pertanian dan penguatan koperasi desa, sebagai upaya mendorong transformasi digital di sektor pertanian sekaligus meningkatkan kapasitas masyarakat dalam mengelola potensi ekonomi lokal. Kegiatan tersebut melibatkan akademisi dari berbagai perguruan tinggi yang berkolaborasi menyampaikan materi sesuai bidang keahlian masing-masing.</p><br>
            <p>Dari Universitas Handayani Makassar, tiga dosen turut berperan sebagai narasumber, yakni Najirah Umar, S.Kom., M.T., Arnida Idrus, S.E., M.Si., dan Dr. Imran Taufik, S.T., M.T. Ketiganya menyampaikan materi yang berfokus pada pemanfaatan teknologi digital, penguatan tata kelola kelembagaan, serta strategi pemberdayaan masyarakat dalam menghadapi tantangan era transformasi digital.</p><br>
            <p>Melalui penyampaian materi tersebut, peserta memperoleh pemahaman mengenai pentingnya penerapan teknologi informasi dalam mendukung produktivitas sektor pertanian, pengelolaan koperasi yang lebih modern, serta pengembangan kapasitas sumber daya manusia di tingkat desa. Pendekatan ini diharapkan mampu meningkatkan efisiensi pengelolaan usaha masyarakat sekaligus memperkuat daya saing ekonomi lokal.</p><br>
            <p>Keterlibatan dosen Universitas Handayani Makassar dalam PKM Nasional ADPERTISI merupakan bagian dari komitmen institusi dalam menghadirkan kontribusi nyata bagi masyarakat melalui kegiatan pengabdian yang aplikatif dan berkelanjutan. Selain menjadi implementasi Tri Dharma Perguruan Tinggi, kegiatan ini juga memperkuat sinergi antara perguruan tinggi, pemerintah daerah, dan masyarakat dalam mendukung pembangunan berbasis ilmu pengetahuan dan teknologi.</p><br>
            <p>Pelaksanaan PKM Nasional ADPERTISI di Kabupaten Maros sendiri melibatkan ratusan dosen dari berbagai perguruan tinggi swasta di Indonesia yang diterjunkan ke sejumlah desa untuk melaksanakan berbagai program pengabdian sesuai kebutuhan masyarakat setempat. Program ini menjadi salah satu agenda nasional ADPERTISI dalam memperkuat peran perguruan tinggi sebagai mitra strategis pembangunan daerah melalui kegiatan edukasi, pendampingan, dan pemberdayaan masyarakat.</p><br>
            <p>Universitas Handayani Makassar berharap partisipasi aktif dosen dalam kegiatan pengabdian seperti ini dapat memberikan manfaat yang berkelanjutan bagi masyarakat sekaligus memperkuat jejaring kolaborasi akademik dengan berbagai perguruan tinggi dan pemangku kepentingan dalam mewujudkan pembangunan desa yang inovatif, mandiri, dan berbasis teknologi.</p>
            
        `
    },
    news2: {
        title: "Perluas Akses Pendidikan Tinggi, Universitas Handayani Makassar Luncurkan Program Beasiswa Kerja Sama Tahun Akademik 2026/2027",
        date: "26 Juni 2026",
        image: "images/Screenshot 2026-07-20 120347.png",
        content: `
            <p>Makassar – Dalam upaya memperluas akses masyarakat terhadap pendidikan tinggi yang berkualitas, Universitas Handayani Makassar bersama Yayasan Doktor Haji Alifuddin kembali menghadirkan Program Beasiswa Kerja Sama Tahun Akademik 2026/2027. Program ini memberikan kesempatan kepada calon mahasiswa baru untuk memperoleh keringanan biaya pendidikan melalui jalur kerja sama dengan berbagai mitra strategis.</p><br>
            <p>Program beasiswa tersebut merupakan bagian dari komitmen Yayasan Doktor Haji Alifuddin dalam mendukung peningkatan kualitas sumber daya manusia melalui pendidikan tinggi yang inklusif dan berkelanjutan. Beasiswa diberikan kepada calon mahasiswa yang melakukan pendaftaran melalui jalur kerja sama dengan lembaga, instansi pemerintah, organisasi, perusahaan, sekolah, pesantren, komunitas, maupun mitra lainnya.</p><br>
            <p>Melalui program ini, penerima beasiswa akan memperoleh potongan Biaya Penyelenggaraan Pendidikan (BPP) sebesar 50 persen yang berlaku selama tujuh semester berturut-turut, serta potongan Sumbangan Pembinaan Pendidikan (SPP) sebesar Rp1.000.000 yang diberikan satu kali pada awal masa perkuliahan.</p><br>
            <p>Selain memberikan kemudahan pembiayaan, Universitas Handayani Makassar terus berkomitmen menghadirkan lingkungan akademik yang adaptif terhadap perkembangan teknologi dan kebutuhan dunia kerja. Mahasiswa memperoleh kesempatan belajar bersama dosen yang profesional dan berpengalaman, serta didukung berbagai program pengembangan kompetensi, riset, inovasi, dan kewirausahaan.</p><br>
            <p>Bagi mahasiswa yang memiliki minat di bidang entrepreneur, universitas juga menyediakan berbagai program pendampingan serta peluang memperoleh dukungan pengembangan usaha. Berbagai kemitraan yang dimiliki Universitas Handayani Makassar dengan dunia usaha, dunia industri, dan berbagai institusi menjadi salah satu keunggulan dalam mempersiapkan lulusan yang kompetitif dan siap menghadapi tantangan global.</p><br>
            <p>Program Beasiswa Kerja Sama ini diharapkan dapat menjadi solusi bagi masyarakat yang ingin melanjutkan pendidikan tinggi dengan biaya yang lebih terjangkau tanpa mengurangi kualitas layanan pendidikan yang diberikan.

Calon mahasiswa yang ingin memperoleh informasi lebih lanjut dapat menghubungi Memi Pratiwi AM, S.E., M.Ak. selaku perwakilan Yayasan Doktor Haji Alifuddin melalui nomor 0822-9935-2625 atau mengakses laman resmi PMB Universitas Handayani Makassar di pmb.handayani.ac.id.</p>
        `
    },
    news3: {
        title: "Kuliah Umum Cyber Law: Perlindungan Data Pribadi di Era AI",
        date: "15 Mei 2026",
        category: "Seminar Hukum",
        image: "images/WhatsApp-Image-2026-06-13-at-10.26.59-768x432.jpeg",
        content: `
            <p>Maros, 11 Juni 2026 – Dalam upaya meningkatkan kapasitas masyarakat dalam menghadapi berbagai tantangan kehidupan keluarga di era digital, Universitas Handayani Makassar bekerja sama dengan Kantor Urusan Agama (KUA) Kecamatan Mandai menyelenggarakan kegiatan Pengabdian kepada Masyarakat (PKM) bertajuk “Capacity Building Literasi Keuangan dan Ketahanan Keluarga: Ikhtiar Mewujudkan Keluarga Sakinah Maslahat di Era Digital 4.0”. Kegiatan ini dilaksanakan di Kelurahan Bontoa, Kecamatan Mandai, Kabupaten Maros, dengan melibatkan Majelis Taklim Nurul Mukminin sebagai kelompok sasaran binaan penyuluh agama KUA Mandai.</p><br>
            <p>Kegiatan yang diikuti oleh para ibu rumah tangga dan anggota majelis taklim tersebut bertujuan untuk meningkatkan pemahaman masyarakat mengenai pentingnya pengelolaan keuangan keluarga, membangun relasi yang harmonis, serta memperkuat ketahanan keluarga dalam menghadapi perubahan sosial dan perkembangan teknologi yang semakin pesat.</p><br>
            <p>Dalam sambutannya, Kepala KUA Mandai, Muh. Tang menyampaikan bahwa keluarga merupakan fondasi utama dalam membangun masyarakat yang sejahtera. Oleh karena itu, penguatan kapasitas keluarga melalui literasi keuangan dan ketahanan keluarga menjadi langkah strategis untuk mendukung terwujudnya keluarga sakinah maslahat yang mampu menghadapi tantangan zaman.</p><br>
            <p>Sebagai narasumber pertama, Prof. Dr. H. Mashur Razak, S.E., M.M., Direktur Pasca sarjana Universitas Handayani Makassar, menyampaikan materi mengenai Literasi dan Inklusi Keuangan Keluarga. Dalam pemaparannya, beliau menjelaskan pentingnya kemampuan keluarga dalam memahami, mengelola, dan mengambil keputusan keuangan secara bijak, mulai dari penyusunan anggaran rumah tangga, pengendalian pengeluaran, pengelolaan tabungan, hingga perencanaan keuangan jangka panjang. Selain itu, beliau juga menekankan pentingnya pemanfaatan layanan keuangan formal yang aman dan terpercaya sebagai bagian dari upaya meningkatkan kesejahteraan keluarga.</p><br>
            <p>Sementara itu, Herlinah, S.Kom., M.Si., Dosen Universitas Handayani Makassar, membawakan materi mengenai Ketahanan Keluarga di era digital 4.0. Dalam paparannya, Herlinah menjelaskan bahwa perkembangan media sosial, e-commerce, layanan keuangan digital, serta teknologi komunikasi telah membawa perubahan besar dalam kehidupan keluarga modern. Kemudahan yang ditawarkan teknologi memberikan banyak manfaat, namun juga menghadirkan tantangan baru berupa perubahan gaya hidup, perilaku konsumtif, tekanan ekonomi, serta menurunnya kualitas komunikasi keluarga, hingga meningkatnya potensi konflik dalam rumah tangga.</p><br>
            <p>Menurut Herlinah, ketahanan keluarga tidak hanya ditentukan oleh kondisi ekonomi yang baik, tetapi juga oleh kemampuan keluarga dalam membangun komunikasi yang terbuka, saling percaya, memberikan dukungan emosional, serta memperkuat nilai-nilai agama dalam kehidupan sehari-hari.</p><br>
            <p>“Keluarga yang tangguh bukanlah keluarga yang tidak pernah menghadapi masalah, melainkan keluarga yang mampu beradaptasi, bekerja sama, dan bangkit bersama ketika menghadapi berbagai tantangan kehidupan,” ujarnya.</p><br>
            <p>Dalam sesi diskusi, peserta juga diajak merefleksikan bagaimana penggunaan media sosial, belanja daring, serta layanan digital lainnya memengaruhi pola konsumsi dan hubungan dalam keluarga. Melalui pendekatan yang interaktif, peserta diberikan pemahaman mengenai pentingnya membedakan kebutuhan dan keinginan, mengelola keuangan secara bijak, serta menjaga kualitas komunikasi keluarga di tengah derasnya arus informasi digital.</p><br>
            <p>Kegiatan pengabdian masyarakat ini mendapat sambutan positif dari peserta yang merasa materi yang disampaikan sangat relevan dengan kondisi kehidupan keluarga saat ini. Selain menambah wawasan mengenai pengelolaan keuangan, kegiatan ini juga memberikan pemahaman bahwa keluarga yang harmonis dan tangguh merupakan kunci utama dalam menghadapi berbagai perubahan di era digital.</p><br>
            <p>Melalui kolaborasi antara perguruan tinggi dan Kementerian Agama, kegiatan ini diharapkan dapat menjadi salah satu bentuk kontribusi nyata dalam meningkatkan kualitas kehidupan keluarga serta memperkuat ketahanan sosial masyarakat menuju terwujudnya keluarga sakinah, maslahat, dan sejahtera menuju Society 5.0.</p><br>
        `
    },
    news4: {
        title: "Perkuat Sinergi Akademik dan Inovasi, Universitas Handayani Makassar Tandatangani MoU Bersama Institut Teknologi dan Bisnis Kalla",
        date: "26 Mei 2026",
        image: "images/foto_berita4.png",
        content: `
            <p>Makassar 26 Mei 2026 – Universitas Handayani Makassar (UHM) kembali memperluas jejaring kemitraan strategis melalui penandatanganan Memorandum of Understanding (MoU) bersama Institut Teknologi dan Bisnis (ITB) Kalla yang dilaksanakan pada Senin, 25 Mei 2026.</p><br>
            <p>Kerja sama tersebut menjadi bagian dari komitmen kedua institusi dalam memperkuat kolaborasi di bidang pendidikan, penelitian, pengabdian kepada masyarakat, serta pengembangan sumber daya akademik yang berorientasi pada peningkatan kualitas perguruan tinggi.</p><br>
            <p>Kegiatan penandatanganan MoU berlangsung dalam suasana hangat dan penuh semangat kolaboratif dengan dihadiri pimpinan dari kedua institusi beserta jajaran akademik terkait.</p><br>
            <p>Melalui kerja sama ini, Universitas Handayani Makassar dan ITB Kalla berkomitmen untuk membangun sinergi dalam pelaksanaan program tridarma perguruan tinggi, pengembangan inovasi akademik, peningkatan kompetensi sumber daya manusia, serta membuka peluang kolaborasi yang lebih luas di masa mendatang.</p><br>
            <p>Pihak Universitas Handayani Makassar menyampaikan bahwa penguatan jejaring antarlembaga pendidikan tinggi merupakan langkah strategis dalam menghadapi tantangan transformasi pendidikan di era digital dan globalisasi. Kolaborasi ini diharapkan mampu memberikan kontribusi positif terhadap peningkatan mutu pendidikan, pengembangan riset kolaboratif, serta penguatan kapasitas institusi secara berkelanjutan.</p><br>
            <p>Selain itu, kerja sama ini juga diharapkan dapat mendorong terciptanya ekosistem akademik yang inovatif, adaptif, dan berdaya saing melalui pertukaran pengetahuan, pengalaman, serta implementasi program-program pengembangan bersama.</p><br>
            <p>Penandatanganan MoU ini menjadi salah satu bentuk nyata komitmen Universitas Handayani Makassar dalam membangun kemitraan strategis dengan berbagai institusi pendidikan tinggi guna mendukung peningkatan kualitas layanan pendidikan dan pengembangan akademik di tingkat regional maupun nasional.

Kegiatan kemudian ditutup dengan sesi dokumentasi bersama sebagai simbol penguatan hubungan kelembagaan antara Universitas Handayani Makassar dan ITB Kalla.</p>
        `
    }
};

// BUKA MODAL BERITA
function openNewsModal(newsKey) {
    const data = newsData[newsKey];
    if (!data) return;

    const modalContent = `
        <span class="news-category" style="position: static; display: inline-block; margin-bottom: 10px;">${data.category}</span>
        <h3 style="font-size: 20px; color: var(--text-white); margin-bottom: 8px;">${data.title}</h3>
        <p class="news-date" style="color: #aaa; font-size: 12px; margin-bottom: 15px;"><i class="fa-regular fa-calendar-days"></i> ${data.date}</p>
        <img src="${data.image}" alt="${data.title}" class="modal-news-img">
        <div id="modalNewsBody" style="font-size: 13px; color: var(--text-gray); line-height: 1.7; margin-top: 15px;">
            ${data.content}
        </div>
    `;

    document.getElementById('modalNewsContent').innerHTML = modalContent;
    document.getElementById('newsDetailModal').style.display = 'block';
}

// TUTUP MODAL BERITA
function closeNewsModal() {
    document.getElementById('newsDetailModal').style.display = 'none';
}


// ==========================================
// 4. GLOBAL LISTENER UNTUK CLOSING MODAL
// ==========================================
window.addEventListener('click', function(event) {
    const prodiModal = document.getElementById('prodiModal');
    const newsModal = document.getElementById('newsDetailModal');

    if (event.target === prodiModal) {
        prodiModal.style.display = 'none';
    }
    if (event.target === newsModal) {
        newsModal.style.display = 'none';
    }
});

// --- LOGIKA FILTER GALERI ---
function filterGallery(category) {
    // Ubah status tombol aktif
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');

    // Filter item gambar
    const items = document.querySelectorAll('.gallery-item');
    items.forEach(item => {
        if (category === 'all' || item.getAttribute('data-category') === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Buka Modal Gambar Galeri
function openGalleryModal(imgSrc) {
    document.getElementById('galleryModalImg').src = imgSrc;
    document.getElementById('galleryModal').style.display = 'flex';
}

// Tutup Modal Gambar Galeri
function closeGalleryModal() {
    document.getElementById('galleryModal').style.display = 'none';
}

// --- LOGIKA LIGHTBOX MODAL GAMBAR ---
function openGalleryModal(imgSrc, title, desc) {
    document.getElementById('galleryModalImg').src = imgSrc;
    document.getElementById('galleryModalTitle').innerText = title;
    document.getElementById('galleryModalDesc').innerText = desc;
    
    document.getElementById('galleryModal').style.display = 'flex';
}

function closeGalleryModal() {
    document.getElementById('galleryModal').style.display = 'none';
}

// Function Tombol Isi Formulir
function openFormModal() {
    alert("Membuka Formulir Pendaftaran Mahasiswa Baru...");
    // Bisa dihubungkan ke modal form pendaftaran atau link external pmb.handayani.ac.id
}

// Function Tombol Login
function openLoginModal() {
    alert("Membuka Portal Login Calon Mahasiswa...");
}

// Function Tombol Pendaftaran Ulang
function openReRegModal() {
    alert("Membuka Halaman Pendaftaran Ulang...");
}
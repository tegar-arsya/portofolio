// Stack Icons
import htmlIcon from "@icons/html.svg";
import cssIcon from "@icons/css.svg";
import jsIcon from "@icons/js.svg";
import phpIcon from "@icons/php.svg";
import bootstrapIcon from "@icons/bootstrap.svg";
import tailwindIcon from "@icons/tailwind.svg";
import reactIcon from "@icons/react.svg";
import nextjsIcon from "@icons/nextjs.svg";
import laravelIcon from "@icons/laravel.svg";
import npmIcon from "@icons/npm.svg";
import blenderIcon from "@icons/blender.svg";
import figmaIcon from "@icons/figma.svg";
import gitIcon from "@icons/git.svg";
import githubIcon from "@icons/github.svg";
import mysqlIcon from "@icons/mysql.svg";
import vscodeIcon from "@icons/vscode.svg";
import AndroidIcon from "@icons/Android_Studio_Icon_3.6.svg.png";

// Project Images
import ApkYogya from "@images/pmb.jpeg";
import wo from "@images/Screenshot (15).png";
import gendis from "@images/Screenshot (16).png";
import wisatakuningan from "@images/Screenshot (17).png";
import PortalBeritaJateng from "@images/Screenshot (80).png";
import GetApiBerita from "@images/Screenshot (81).png";
import PermohonanInformasi from "@images/Screenshot (82).png";

const tools = {
    Git: { name: "Git", src: gitIcon, level: "Version control" },
    Github: { name: "Github", src: githubIcon, level: "Git hosting" },
    NPM: { name: "NPM", src: npmIcon, level: "Package manager" },
    VSCode: { name: "VSCode", src: vscodeIcon, level: "Code editor" },
    Figma: { name: "Figma", src: figmaIcon, level: "UIUX Design tool" },
    Blender: { name: "Blender", src: blenderIcon, level: "3D software" },
    Android: { name: "Android Studio", src: AndroidIcon, level: "Code Edtior" },
};

const stacks = {
    HTML: { name: "HTML", src: htmlIcon, level: "Advanced" },
    CSS: { name: "CSS", src: cssIcon, level: "Advanced" },
    PHP: { name: "PHP", src: phpIcon, level: "Intermediate" },
    JS: { name: "Javascript", src: jsIcon, level: "Advanced" },
    React: { name: "ReactJS", src: reactIcon, level: "Advanced" },
    NextJS: { name: "NextJS", src: nextjsIcon, level: "Advanced" },
    Laravel: { name: "Laravel", src: laravelIcon, level: "Beginer" },
    Bootstrap: { name: "Bootstrap", src: bootstrapIcon, level: "Intermediate" },
    Tailwind: { name: "TailwindCSS", src: tailwindIcon, level: "Advanced" },
    MySQL: { name: "MySQL", src: mysqlIcon, level: "Intermediate" },
};

const projects = [{
        id: 1,
        name: "Aplikasi Pencarian Rumah Sakit DI Yogyakarta",
        desc: "My first project mobile apps with java and GIS.",
        image: ApkYogya,
        repo: "https://github.com/tegar-arsya/PMOB",
        stack: "java",
        gif: "",
    },
    {
        id: 2,
        name: "Website Wedding Organizer Setia w.O",
        desc: "website fullstack saya tentang wedding organizer dan API.",
        image: wo,
        // web: "https://bangtege.000webhostapp.com/",
        repo: "https://github.com/tegar-arsya/RPL-WEDDING-ORGANIZER",
        stack: "HTML, Javascript, PHP,AOS, SwiperJS",
        gif: "",
    },
    {
        id: 3,
        name: "Toko Kue Gendis",
        desc: "Ini adalah project dari client saya, jobdesk saya pada project ini adalah sebagai frontend",
        image: gendis,
        web: "http://gendis.free.nf/",
        repo: "",
        stack: "HTML, Javascript, Bootstrap, PHP",
        gif: "",
    },
    {
        id: 4,
        name: "Wisata Kuningan",
        desc: "fullstack di website wisata kuningan berbasis sig",
        image: wisatakuningan,
        web: "https://tegar-arsya.github.io/wisata-sig-kuningan/",
        repo: "https://github.com/tegar-arsya/wisata-sig-kuningan",
        stack: "Javascript, HTML,CSS",
        gif: "",
    },
    {
        id: 5,
        name: "Portal Berita Jawa Tengah",
        desc: "fullstack",
        image: PortalBeritaJateng,
        web: "https://portalberitajateng.000webhostapp.com/",
        repo: "https://github.com/tegar-arsya/portal-berita-jateng",
        stack: "Javascript, HTML,CSS,PHP",
        gif: "",
    },
    {
        id: 6,
        name: "GET API dari Portal Admin",
        desc: "fullstack",
        image: GetApiBerita,
        web: "https://tegar-arsya.github.io/get-berita/",
        repo: "https://github.com/tegar-arsya/get-berita",
        stack: "Javascript, HTML,CSS,PHP",
        gif: "",
    },
    {
        id: 7,
        name: "Website Permohonan Informasi PPID",
        desc: "fullstack",
        image: PermohonanInformasi,
        // web: "-",
        repo: "https://github.com/tegar-arsya/permohonan_informasi",
        stack: "Javascript, HTML,CSS,PHP",
        gif: "",
    },
];

export { tools, stacks, projects };
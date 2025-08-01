import Image from "next/image";

const mentors = [
  {
    name: "Sumit Saha",
    platform: "Learn with Sumit (YouTube)",
    link: "https://www.youtube.com/@LearnwithSumit",
    image: "/mentors/sumit-saha.jpg",
  },
  {
    name: "Ali Hossain",
    platform: "YouTube Channel",
    link: "https://www.youtube.com/@aliHossain021",
    image: "/mentors/ali-hossain.jpg",
  },
  {
    name: "Apna College",
    platform: "YouTube Channel",
    link: "https://www.youtube.com/@ApnaCollegeOfficial",
    image: "/mentors/apna-college.jpg",
  },
  {
    name: "Fireship",
    platform: "YouTube Channel",
    link: "https://www.youtube.com/@Fireship",
    image: "/mentors/fireship.jpg",
  },
  {
    name: "Jhankar Mahbub",
    platform: "YouTube Channel",
    link: "https://www.youtube.com/@JhankarMahbub",
    image: "/mentors/jhanker-mahbub.jpg",
  },
  {
    name: "JavaScript Mastery",
    platform: "Youtube Channel",
    link: "https://www.youtube.com/@javascriptmastery",
    image: "/mentors/javascript-mastery.jpg",
  },
  {
    name: "CodeWithHarry",
    platform: "Youtube Channel",
    link: "https://www.youtube.com/@CodeWithHarry",
    image: "/mentors/CodeWithHarry.png",
  },
  {
    name: "freeCodeCamp",
    platform: "Learning Platform",
    link: "https://www.freecodecamp.org",
    image: "/mentors/freecodecamp.png",
  },
  {
    name: "daily.dev",
    platform: "Learning Platform",
    link: "https://www.daily.dev",
    image: "/mentors/daily-dev.jpg",
  },
];

export default function Mentors() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
          Mentors & Resources That Shaped Me
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {mentors.map((mentor, index) => (
            <a
              key={index}
              href={mentor.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-between items-center p-5 rounded-xl border border-gray-300 dark:border-gray-700 shadow-md hover:shadow-lg bg-white dark:bg-slate-900 transition-all duration-300 ease-in-out hover:scale-105"
            >
              <div className=" text-left">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {mentor.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {mentor.platform}
                </p>
              </div>
              <div>
                <Image
                  alt={mentor.name}
                  src={mentor.image}
                  height={60}
                  width={60}
                  className="rounded-full ring-2 ring-neutral-200"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

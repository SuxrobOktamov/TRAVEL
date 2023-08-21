import moonPng from '../assets/destination/image-moon.png';
import moonWebp from '../assets/destination/image-moon.webp';
import marsPng from '../assets/destination/image-mars.png';
import marsWebp from '../assets/destination/image-mars.webp';
import EuropaPng from '../assets/destination/image-europa.png';
import EuropaWebp from '../assets/destination/image-europa.webp';
import TitanPng from '../assets/destination/image-titan.png';
import TitanWebp from '../assets/destination/image-titan.webp';
import DouglasPng from '../assets/crew/image-douglas-hurley.png';
import DouglasWebp from '../assets/crew/image-douglas-hurley.webp';
import MarkPng from '../assets/crew/image-mark-shuttleworth.png';
import MarkWebp from '../assets/crew/image-mark-shuttleworth.webp';
import VictorPng from '../assets/crew/image-victor-glover.png';
import VictorWebp from '../assets/crew/image-victor-glover.webp';
import AnoushehPng from '../assets/crew/image-anousheh-ansari.png';
import AnoushehWebp from '../assets/crew/image-anousheh-ansari.webp';
import LaunchPortrait from '../assets/technology/image-launch-vehicle-portrait.jpg';
import LaunchLandscape from '../assets/technology/image-launch-vehicle-landscape.jpg';
import SpaceportPortrait from '../assets/technology/image-spaceport-portrait.jpg';
import SpaceportLandscape from '../assets/technology/image-spaceport-landscape.jpg';
import CapsulePortrait from '../assets/technology/image-space-capsule-portrait.jpg';
import CapsuleLandscape from '../assets/technology/image-space-capsule-landscape.jpg';


export const data  = {
    destinations: [
        {
            name: "Moon",
            images:{
              png: moonPng,
              webp: moonWebp
            },
            description: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
            distance: "384,400 km",
            travel: "3 days"
          },
          {
            name: "Mars",
            images: {
              png: marsPng,
              webp: marsWebp
            },
            description: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
            distance: "225 mil. km",
            travel: "9 months"
          },
          {
            name: "Europa",
            images: {
              png: EuropaPng,
              webp: EuropaWebp
            },
            description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
            distance: "628 mil. km",
            travel: "3 years"
          },
          {
            name: "Titan",
            images: {
              png: TitanPng,
              webp: TitanWebp
            },
            description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
            distance: "1.6 bil. km",
            travel: "7 years"
          }
    ],
    crew: [
        {
          name: "Douglas Hurley",
          images: {
            png: DouglasPng,
            webp: DouglasWebp
          },
          role: "Commander",
          bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
          id: 1
        },
        {
          name: "Mark Shuttleworth",
          images: {
            png: MarkPng,
            webp: MarkWebp
          },
          role: "Mission Specialist",
          bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
          id:2
        },
        {
          name: "Victor Glover",
          images: {
            png: VictorPng,
            webp: VictorWebp
          },
          role: "Pilot",
          bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
          id:3
        },
        {
          name: "Anousheh Ansari",
          images: {
            png: AnoushehPng,
            webp: AnoushehWebp
          },
          role: "Flight Engineer",
          bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
          id:4
        }
    ],
    technology: [
        {
          name: "Launch vehicle",
          images: {
            portrait: LaunchPortrait,
            landscape: LaunchLandscape
          },
          description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
          id:1
        },
        {
          name: "Spaceport",
          images: {
            portrait: SpaceportPortrait,
            landscape: SpaceportLandscape
          },
          description: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
          id:2
        },
        {
          name: "Space capsule",
          images: {
            portrait: CapsulePortrait,
            landscape: CapsuleLandscape
          },
          description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
          id:3
        }
    ]
}


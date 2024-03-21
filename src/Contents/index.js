import img1 from '../assets/1.png'
import img2 from '../assets/2.png'
import img3 from '../assets/3.png'
import img4 from '../assets/4.png'
import img5 from '../assets/5.png'
import img6 from '../assets/6.png'

import almond1 from '../assets/Almonds/1.jpg'
import almond2 from '../assets/Almonds/2.jpg'
import almond3 from '../assets/Almonds/3.jpg'

import coconut1 from '../assets/Coconut/1.jpg'
import coconut2 from '../assets/Coconut/2.jpg'
import coconut3 from '../assets/Coconut/3.jpg'

import onion1 from '../assets/Onions/1.jpg'
import onion2 from '../assets/Onions/2.jpg'

import walnut1 from '../assets/Walnuts/1.jpg'
import walnut2 from '../assets/Walnuts/2.jpg'
import walnut3 from '../assets/Walnuts/3.jpg'
import walnut4 from '../assets/Walnuts/4.jpg'

import wimg from '../assets/walnut.png'
import cimg from '../assets/coconut.png'
import onsimg from '../assets/onionseeds.png'
import aimg from '../assets/almond.png'

import amazon from '../assets/SM/amazon.png'
import facebook from '../assets/SM/facebook.png'
import instagram from '../assets/SM/instagram.png'

export const details = [
    [img1, "Luxurious Hydration", "Rich in essential fatty acids and vitamins, Tailum Almond Oil deeply nourishes and locks in moisture for a radiant, healthy glow."],
    [img2, "Versatile Goodness", "Use it as a daily moisturizer, massage oil, makeup remover, or hair treatment for endless benefits."],
    [img3, "Lightweight and non-greasy", "Tailum Almond Oil is easily absorbed by the skin and hair, leaving no greasy residue."],
    [img4, "Gentle & Effective", "Ideal for all skin types, even sensitive skin, Tailum Almond Oil is non-comedogenic and won't clog pores."],
    [img5, "Natural Anti-Aging", "Packed with antioxidants like Vitamin E, it helps combat free radical damage and promotes skin elasticity for a youthful look."],
    [img6, "Nourishing Hair Treatment", "Strengthens hair strands, reduces frizz, and adds shine for healthier, more manageable locks."]
]

const onionFeatures = ["Supports Hair Growth",
"Flawless Skin",
"Reduces acne",
"Reduces dandruff and scalp irritation",
"Moisturizes and shines hair"]

const walnutFeatures = ["Nourishing", "Prevents Hair Loss", "Removes Dandruff", "Moisturizes skin and hair", "Anit-ageing properties"]

const coconutFeatures = ["Moisturizes skin", "Nourishes the hair", "Maintains scalp health", "Makeup remover", "Antioxidant and anti-inflammatory"]

const almondFeatures = ["Deeply nourishes skin", "Lightweight and non-greasy", "Gentle and Effective", "Nourishing Hair Treatment", "Anti-ageing"]

const almonds = [
    "Almond Oil",
    [almond1, almond2, almond3], almondFeatures, "https://www.amazon.in/dp/B0CTD2P7MN", aimg
]

const walnuts = [
    "Walnut Oil",
    [walnut1, walnut2, walnut3, walnut4],
    walnutFeatures, "https://www.amazon.in/Tailum-Walnut-Oil-Radiance-Pressed/dp/B0CVBKHN51/", wimg
]

const onions = [
    "Onion Black Seed Oil",
    [onion1, onion2],
    onionFeatures, "https://www.amazon.in/Tailum-Kalonji-Health-Pressed-Greasy/dp/B0CTFRQK7X/", onsimg
]

const coconuts = [
    "Coconut Oil",
    [coconut1, coconut2, coconut3],
    coconutFeatures, "https://www.amazon.in/Tailum-Coconut-Massage-moisturizer-Pressed/dp/B0CBHQ1VFF/", cimg
]

export const products = [
    almonds, walnuts, coconuts, onions
]

export const smIcons = [
    facebook, instagram, amazon
]
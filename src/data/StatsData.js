import React from "react"
import { GiEarthAmerica } from "react-icons/gi"
import { MdAirplanemodeActive, MdTimer } from "react-icons/md"
import { FaMoneyCheck } from "react-icons/fa"

export const StatsData = [
  {
    icon: <GiEarthAmerica style={{ color: "#047bf1" }} />,
    title: "Over 100 Destination",
    desc: "Travel to over 100 unique places",
  },
  {
    icon: <MdAirplanemodeActive style={{ color: "#f3a82e" }} />,
    title: "1 Million Trips Made",
    desc: "Over 1 million trips completed last year ",
  },
  {
    icon: <MdTimer style={{ color: "#f34f2e" }} />,
    title: "Fastest Support",
    desc: "Access our support team 24.7",
  },
  {
    icon: <FaMoneyCheck style={{ color: "#3af576" }} />,
    title: "Best Deals",
    desc: "We offer the bes prices",
  },
]

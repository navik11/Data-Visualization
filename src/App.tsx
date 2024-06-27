import { useState } from 'react';
import NavBar from './components/NavBar'
import axios from 'axios';
import './components/Tooltip.css';
import './components/Axis.css';
import TagStats from './components/TagStats';
import { TagStatsDataPoint } from './components/TagStats';
import Timeline from './components/Timeline';

const data: TagStatsDataPoint[] = [
    {
        "age": "MPI_Allreduce",
        "population": 118678329,
        "state": "1"
    },
    {
        "age": "MPI_Allreduce",
        "population": 207578,
        "state": "10"
    },
    {
        "age": "MPI_Allreduce",
        "population": 245721,
        "state": "100"
    },
    {
        "age": "MPI_Allreduce",
        "population": 205744,
        "state": "101"
    },
    {
        "age": "MPI_Allreduce",
        "population": 6041,
        "state": "102"
    },
    {
        "age": "MPI_Allreduce",
        "population": 85652,
        "state": "103"
    },
    {
        "age": "MPI_Allreduce",
        "population": 78036,
        "state": "104"
    },
    {
        "age": "MPI_Allreduce",
        "population": 5383,
        "state": "105"
    },
    {
        "age": "MPI_Allreduce",
        "population": 90489,
        "state": "106"
    },
    {
        "age": "MPI_Allreduce",
        "population": 32858,
        "state": "107"
    },
    {
        "age": "MPI_Allreduce",
        "population": 8792,
        "state": "108"
    },
    {
        "age": "MPI_Allreduce",
        "population": 194915,
        "state": "109"
    },
    {
        "age": "MPI_Allreduce",
        "population": 218442,
        "state": "11"
    },
    {
        "age": "MPI_Allreduce",
        "population": 135856,
        "state": "110"
    },
    {
        "age": "MPI_Allreduce",
        "population": 5677,
        "state": "111"
    },
    {
        "age": "MPI_Allreduce",
        "population": 59619,
        "state": "112"
    },
    {
        "age": "MPI_Allreduce",
        "population": 110754,
        "state": "113"
    },
    {
        "age": "MPI_Allreduce",
        "population": 9919,
        "state": "114"
    },
    {
        "age": "MPI_Allreduce",
        "population": 263130,
        "state": "115"
    },
    {
        "age": "MPI_Allreduce",
        "population": 22736,
        "state": "116"
    },
    {
        "age": "MPI_Allreduce",
        "population": 5201,
        "state": "117"
    },
    {
        "age": "MPI_Allreduce",
        "population": 58058,
        "state": "118"
    },
    {
        "age": "MPI_Allreduce",
        "population": 21889,
        "state": "119"
    },
    {
        "age": "MPI_Allreduce",
        "population": 9331,
        "state": "12"
    },
    {
        "age": "MPI_Allreduce",
        "population": 5656,
        "state": "120"
    },
    {
        "age": "MPI_Allreduce",
        "population": 99624,
        "state": "121"
    },
    {
        "age": "MPI_Allreduce",
        "population": 23744,
        "state": "122"
    },
    {
        "age": "MPI_Allreduce",
        "population": 5012,
        "state": "123"
    },
    {
        "age": "MPI_Allreduce",
        "population": 76027,
        "state": "124"
    },
    {
        "age": "MPI_Allreduce",
        "population": 79562,
        "state": "125"
    },
    {
        "age": "MPI_Allreduce",
        "population": 6797,
        "state": "126"
    },
    {
        "age": "MPI_Allreduce",
        "population": 59850,
        "state": "127"
    },
    {
        "age": "MPI_Allreduce",
        "population": 20419,
        "state": "128"
    },
    {
        "age": "MPI_Allreduce",
        "population": 11354,
        "state": "129"
    },
    {
        "age": "MPI_Allreduce",
        "population": 259427,
        "state": "13"
    },
    {
        "age": "MPI_Allreduce",
        "population": 175924,
        "state": "130"
    },
    {
        "age": "MPI_Allreduce",
        "population": 134764,
        "state": "131"
    },
    {
        "age": "MPI_Allreduce",
        "population": 4620,
        "state": "132"
    },
    {
        "age": "MPI_Allreduce",
        "population": 57281,
        "state": "133"
    },
    {
        "age": "MPI_Allreduce",
        "population": 21049,
        "state": "134"
    },
    {
        "age": "MPI_Allreduce",
        "population": 5719,
        "state": "135"
    },
    {
        "age": "MPI_Allreduce",
        "population": 90468,
        "state": "136"
    },
    {
        "age": "MPI_Allreduce",
        "population": 156919,
        "state": "137"
    },
    {
        "age": "MPI_Allreduce",
        "population": 11900,
        "state": "138"
    },
    {
        "age": "MPI_Allreduce",
        "population": 60893,
        "state": "139"
    },
    {
        "age": "MPI_Allreduce",
        "population": 21168,
        "state": "14"
    },
    {
        "age": "MPI_Allreduce",
        "population": 22981,
        "state": "140"
    },
    {
        "age": "MPI_Allreduce",
        "population": 3815,
        "state": "141"
    },
    {
        "age": "MPI_Allreduce",
        "population": 63224,
        "state": "142"
    },
    {
        "age": "MPI_Allreduce",
        "population": 20447,
        "state": "143"
    },
    {
        "age": "MPI_Allreduce",
        "population": 8582,
        "state": "144"
    },
    {
        "age": "MPI_Allreduce",
        "population": 175252,
        "state": "145"
    },
    {
        "age": "MPI_Allreduce",
        "population": 24087,
        "state": "146"
    },
    {
        "age": "MPI_Allreduce",
        "population": 6293,
        "state": "147"
    },
    {
        "age": "MPI_Allreduce",
        "population": 221760,
        "state": "148"
    },
    {
        "age": "MPI_Allreduce",
        "population": 174608,
        "state": "149"
    },
    {
        "age": "MPI_Allreduce",
        "population": 5831,
        "state": "15"
    },
    {
        "age": "MPI_Allreduce",
        "population": 5796,
        "state": "150"
    },
    {
        "age": "MPI_Allreduce",
        "population": 126616,
        "state": "151"
    },
    {
        "age": "MPI_Allreduce",
        "population": 23716,
        "state": "152"
    },
    {
        "age": "MPI_Allreduce",
        "population": 5698,
        "state": "153"
    },
    {
        "age": "MPI_Allreduce",
        "population": 60851,
        "state": "154"
    },
    {
        "age": "MPI_Allreduce",
        "population": 26390,
        "state": "155"
    },
    {
        "age": "MPI_Allreduce",
        "population": 4669,
        "state": "156"
    },
    {
        "age": "MPI_Allreduce",
        "population": 59619,
        "state": "157"
    },
    {
        "age": "MPI_Allreduce",
        "population": 19481,
        "state": "158"
    },
    {
        "age": "MPI_Allreduce",
        "population": 5362,
        "state": "159"
    },
    {
        "age": "MPI_Allreduce",
        "population": 59157,
        "state": "16"
    },
    {
        "age": "MPI_Allreduce",
        "population": 14875,
        "state": "160"
    },
    {
        "age": "MPI_Allreduce",
        "population": 4102,
        "state": "161"
    },
    {
        "age": "MPI_Allreduce",
        "population": 21049,
        "state": "162"
    },
    {
        "age": "MPI_Allreduce",
        "population": 4144,
        "state": "163"
    },
    {
        "age": "MPI_Allreduce",
        "population": 1946,
        "state": "164"
    },
    {
        "age": "MPI_Allreduce",
        "population": 19243,
        "state": "165"
    },
    {
        "age": "MPI_Allreduce",
        "population": 6741,
        "state": "166"
    },
    {
        "age": "MPI_Allreduce",
        "population": 1470,
        "state": "167"
    },
    {
        "age": "MPI_Allreduce",
        "population": 26348,
        "state": "168"
    },
    {
        "age": "MPI_Allreduce",
        "population": 5677,
        "state": "169"
    },
    {
        "age": "MPI_Allreduce",
        "population": 104146,
        "state": "17"
    },
    {
        "age": "MPI_Allreduce",
        "population": 1316,
        "state": "170"
    },
    {
        "age": "MPI_Allreduce",
        "population": 26635,
        "state": "171"
    },
    {
        "age": "MPI_Allreduce",
        "population": 5061,
        "state": "172"
    },
    {
        "age": "MPI_Allreduce",
        "population": 2457,
        "state": "173"
    },
    {
        "age": "MPI_Allreduce",
        "population": 24927,
        "state": "174"
    },
    {
        "age": "MPI_Allreduce",
        "population": 5474,
        "state": "175"
    },
    {
        "age": "MPI_Allreduce",
        "population": 1862,
        "state": "176"
    },
    {
        "age": "MPI_Allreduce",
        "population": 22505,
        "state": "177"
    },
    {
        "age": "MPI_Allreduce",
        "population": 3829,
        "state": "178"
    },
    {
        "age": "MPI_Allreduce",
        "population": 1554,
        "state": "179"
    },
    {
        "age": "MPI_Allreduce",
        "population": 11109,
        "state": "18"
    },
    {
        "age": "MPI_Allreduce",
        "population": 23051,
        "state": "180"
    },
    {
        "age": "MPI_Allreduce",
        "population": 5698,
        "state": "181"
    },
    {
        "age": "MPI_Allreduce",
        "population": 1323,
        "state": "182"
    },
    {
        "age": "MPI_Allreduce",
        "population": 23520,
        "state": "183"
    },
    {
        "age": "MPI_Allreduce",
        "population": 5999,
        "state": "184"
    },
    {
        "age": "MPI_Allreduce",
        "population": 1372,
        "state": "185"
    },
    {
        "age": "MPI_Allreduce",
        "population": 163114,
        "state": "186"
    },
    {
        "age": "MPI_Allreduce",
        "population": 3871,
        "state": "187"
    },
    {
        "age": "MPI_Allreduce",
        "population": 1204,
        "state": "188"
    },
    {
        "age": "MPI_Allreduce",
        "population": 126875,
        "state": "189"
    },
    {
        "age": "MPI_Allreduce",
        "population": 93303,
        "state": "19"
    },
    {
        "age": "MPI_Allreduce",
        "population": 4557,
        "state": "190"
    },
    {
        "age": "MPI_Allreduce",
        "population": 938,
        "state": "191"
    },
    {
        "age": "MPI_Allreduce",
        "population": 18774,
        "state": "192"
    },
    {
        "age": "MPI_Allreduce",
        "population": 4830,
        "state": "193"
    },
    {
        "age": "MPI_Allreduce",
        "population": 23331,
        "state": "194"
    },
    {
        "age": "MPI_Allreduce",
        "population": 2695,
        "state": "195"
    },
    {
        "age": "MPI_Allreduce",
        "population": 27006,
        "state": "196"
    },
    {
        "age": "MPI_Allreduce",
        "population": 4907,
        "state": "197"
    },
    {
        "age": "MPI_Allreduce",
        "population": 2198,
        "state": "198"
    },
    {
        "age": "MPI_Allreduce",
        "population": 20741,
        "state": "199"
    },
    {
        "age": "MPI_Allreduce",
        "population": 5852889,
        "state": "2"
    },
    {
        "age": "MPI_Allreduce",
        "population": 240254,
        "state": "20"
    },
    {
        "age": "MPI_Allreduce",
        "population": 4032,
        "state": "200"
    },
    {
        "age": "MPI_Allreduce",
        "population": 1939,
        "state": "201"
    },
    {
        "age": "MPI_Allreduce",
        "population": 21644,
        "state": "202"
    },
    {
        "age": "MPI_Allreduce",
        "population": 8029,
        "state": "203"
    },
    {
        "age": "MPI_Allreduce",
        "population": 1638,
        "state": "204"
    },
    {
        "age": "MPI_Allreduce",
        "population": 21910,
        "state": "205"
    },
    {
        "age": "MPI_Allreduce",
        "population": 7378,
        "state": "206"
    },
    {
        "age": "MPI_Allreduce",
        "population": 4053,
        "state": "207"
    },
    {
        "age": "MPI_Allreduce",
        "population": 24185,
        "state": "208"
    },
    {
        "age": "MPI_Allreduce",
        "population": 6349,
        "state": "209"
    },
    {
        "age": "MPI_Allreduce",
        "population": 6132,
        "state": "21"
    },
    {
        "age": "MPI_Allreduce",
        "population": 1428,
        "state": "210"
    },
    {
        "age": "MPI_Allreduce",
        "population": 26901,
        "state": "211"
    },
    {
        "age": "MPI_Allreduce",
        "population": 5131,
        "state": "212"
    },
    {
        "age": "MPI_Allreduce",
        "population": 2296,
        "state": "213"
    },
    {
        "age": "MPI_Allreduce",
        "population": 20251,
        "state": "214"
    },
    {
        "age": "MPI_Allreduce",
        "population": 5551,
        "state": "215"
    },
    {
        "age": "MPI_Allreduce",
        "population": 2499,
        "state": "216"
    },
    {
        "age": "MPI_Allreduce",
        "population": 101787,
        "state": "217"
    },
    {
        "age": "MPI_Allreduce",
        "population": 5859,
        "state": "218"
    },
    {
        "age": "MPI_Allreduce",
        "population": 2408,
        "state": "219"
    },
    {
        "age": "MPI_Allreduce",
        "population": 65317,
        "state": "22"
    },
    {
        "age": "MPI_Allreduce",
        "population": 111825,
        "state": "220"
    },
    {
        "age": "MPI_Allreduce",
        "population": 5838,
        "state": "221"
    },
    {
        "age": "MPI_Allreduce",
        "population": 1393,
        "state": "222"
    },
    {
        "age": "MPI_Allreduce",
        "population": 86709,
        "state": "223"
    },
    {
        "age": "MPI_Allreduce",
        "population": 6993,
        "state": "224"
    },
    {
        "age": "MPI_Allreduce",
        "population": 2758,
        "state": "225"
    },
    {
        "age": "MPI_Allreduce",
        "population": 168308,
        "state": "226"
    },
    {
        "age": "MPI_Allreduce",
        "population": 6300,
        "state": "227"
    },
    {
        "age": "MPI_Allreduce",
        "population": 21287,
        "state": "228"
    },
    {
        "age": "MPI_Allreduce",
        "population": 62797,
        "state": "229"
    },
    {
        "age": "MPI_Allreduce",
        "population": 26208,
        "state": "23"
    },
    {
        "age": "MPI_Allreduce",
        "population": 37296,
        "state": "230"
    },
    {
        "age": "MPI_Allreduce",
        "population": 5278,
        "state": "231"
    },
    {
        "age": "MPI_Allreduce",
        "population": 212394,
        "state": "232"
    },
    {
        "age": "MPI_Allreduce",
        "population": 24129,
        "state": "233"
    },
    {
        "age": "MPI_Allreduce",
        "population": 5712,
        "state": "234"
    },
    {
        "age": "MPI_Allreduce",
        "population": 161420,
        "state": "235"
    },
    {
        "age": "MPI_Allreduce",
        "population": 76300,
        "state": "236"
    },
    {
        "age": "MPI_Allreduce",
        "population": 38766,
        "state": "237"
    },
    {
        "age": "MPI_Allreduce",
        "population": 5880,
        "state": "238"
    },
    {
        "age": "MPI_Allreduce",
        "population": 264516,
        "state": "239"
    },
    {
        "age": "MPI_Allreduce",
        "population": 4669,
        "state": "24"
    },
    {
        "age": "MPI_Allreduce",
        "population": 25130,
        "state": "240"
    },
    {
        "age": "MPI_Allreduce",
        "population": 5943,
        "state": "241"
    },
    {
        "age": "MPI_Allreduce",
        "population": 55650,
        "state": "242"
    },
    {
        "age": "MPI_Allreduce",
        "population": 133861,
        "state": "243"
    },
    {
        "age": "MPI_Allreduce",
        "population": 924,
        "state": "244"
    },
    {
        "age": "MPI_Allreduce",
        "population": 89558,
        "state": "245"
    },
    {
        "age": "MPI_Allreduce",
        "population": 174503,
        "state": "246"
    },
    {
        "age": "MPI_Allreduce",
        "population": 258972,
        "state": "247"
    },
    {
        "age": "MPI_Allreduce",
        "population": 23016,
        "state": "248"
    },
    {
        "age": "MPI_Allreduce",
        "population": 20405,
        "state": "249"
    },
    {
        "age": "MPI_Allreduce",
        "population": 284697,
        "state": "25"
    },
    {
        "age": "MPI_Allreduce",
        "population": 25053,
        "state": "250"
    },
    {
        "age": "MPI_Allreduce",
        "population": 244237,
        "state": "251"
    },
    {
        "age": "MPI_Allreduce",
        "population": 157444,
        "state": "252"
    },
    {
        "age": "MPI_Allreduce",
        "population": 14287,
        "state": "253"
    },
    {
        "age": "MPI_Allreduce",
        "population": 240562,
        "state": "254"
    },
    {
        "age": "MPI_Allreduce",
        "population": 264243,
        "state": "255"
    },
    {
        "age": "MPI_Allreduce",
        "population": 6587,
        "state": "256"
    },
    {
        "age": "MPI_Allreduce",
        "population": 179116,
        "state": "257"
    },
    {
        "age": "MPI_Allreduce",
        "population": 17136,
        "state": "258"
    },
    {
        "age": "MPI_Allreduce",
        "population": 5299,
        "state": "259"
    },
    {
        "age": "MPI_Allreduce",
        "population": 69020,
        "state": "26"
    },
    {
        "age": "MPI_Allreduce",
        "population": 47411,
        "state": "260"
    },
    {
        "age": "MPI_Allreduce",
        "population": 174419,
        "state": "261"
    },
    {
        "age": "MPI_Allreduce",
        "population": 5565,
        "state": "262"
    },
    {
        "age": "MPI_Allreduce",
        "population": 64337,
        "state": "263"
    },
    {
        "age": "MPI_Allreduce",
        "population": 89173,
        "state": "264"
    },
    {
        "age": "MPI_Allreduce",
        "population": 5306,
        "state": "265"
    },
    {
        "age": "MPI_Allreduce",
        "population": 231721,
        "state": "266"
    },
    {
        "age": "MPI_Allreduce",
        "population": 164010,
        "state": "267"
    },
    {
        "age": "MPI_Allreduce",
        "population": 7798,
        "state": "268"
    },
    {
        "age": "MPI_Allreduce",
        "population": 199710,
        "state": "269"
    },
    {
        "age": "MPI_Allreduce",
        "population": 8981,
        "state": "27"
    },
    {
        "age": "MPI_Allreduce",
        "population": 136213,
        "state": "270"
    },
    {
        "age": "MPI_Allreduce",
        "population": 6545,
        "state": "271"
    },
    {
        "age": "MPI_Allreduce",
        "population": 248171,
        "state": "272"
    },
    {
        "age": "MPI_Allreduce",
        "population": 135758,
        "state": "273"
    },
    {
        "age": "MPI_Allreduce",
        "population": 10717,
        "state": "274"
    },
    {
        "age": "MPI_Allreduce",
        "population": 88207,
        "state": "275"
    },
    {
        "age": "MPI_Allreduce",
        "population": 107618,
        "state": "276"
    },
    {
        "age": "MPI_Allreduce",
        "population": 5586,
        "state": "277"
    },
    {
        "age": "MPI_Allreduce",
        "population": 63945,
        "state": "278"
    },
    {
        "age": "MPI_Allreduce",
        "population": 19089,
        "state": "279"
    },
    {
        "age": "MPI_Allreduce",
        "population": 71253,
        "state": "28"
    },
    {
        "age": "MPI_Allreduce",
        "population": 6664,
        "state": "280"
    },
    {
        "age": "MPI_Allreduce",
        "population": 178703,
        "state": "281"
    },
    {
        "age": "MPI_Allreduce",
        "population": 20398,
        "state": "282"
    },
    {
        "age": "MPI_Allreduce",
        "population": 6069,
        "state": "283"
    },
    {
        "age": "MPI_Allreduce",
        "population": 86520,
        "state": "284"
    },
    {
        "age": "MPI_Allreduce",
        "population": 20041,
        "state": "285"
    },
    {
        "age": "MPI_Allreduce",
        "population": 7511,
        "state": "286"
    },
    {
        "age": "MPI_Allreduce",
        "population": 196714,
        "state": "287"
    },
    {
        "age": "MPI_Allreduce",
        "population": 171136,
        "state": "288"
    },
    {
        "age": "MPI_Allreduce",
        "population": 5362,
        "state": "289"
    },
    {
        "age": "MPI_Allreduce",
        "population": 23044,
        "state": "29"
    },
    {
        "age": "MPI_Allreduce",
        "population": 53361,
        "state": "290"
    },
    {
        "age": "MPI_Allreduce",
        "population": 23737,
        "state": "291"
    },
    {
        "age": "MPI_Allreduce",
        "population": 6664,
        "state": "292"
    },
    {
        "age": "MPI_Allreduce",
        "population": 92652,
        "state": "293"
    },
    {
        "age": "MPI_Allreduce",
        "population": 45948,
        "state": "294"
    },
    {
        "age": "MPI_Allreduce",
        "population": 25291,
        "state": "295"
    },
    {
        "age": "MPI_Allreduce",
        "population": 94143,
        "state": "296"
    },
    {
        "age": "MPI_Allreduce",
        "population": 20776,
        "state": "297"
    },
    {
        "age": "MPI_Allreduce",
        "population": 6307,
        "state": "298"
    },
    {
        "age": "MPI_Allreduce",
        "population": 70938,
        "state": "299"
    },
    {
        "age": "MPI_Allreduce",
        "population": 638057,
        "state": "3"
    },
    {
        "age": "MPI_Allreduce",
        "population": 6566,
        "state": "30"
    },
    {
        "age": "MPI_Allreduce",
        "population": 25984,
        "state": "300"
    },
    {
        "age": "MPI_Allreduce",
        "population": 6139,
        "state": "301"
    },
    {
        "age": "MPI_Allreduce",
        "population": 87360,
        "state": "302"
    },
    {
        "age": "MPI_Allreduce",
        "population": 168077,
        "state": "303"
    },
    {
        "age": "MPI_Allreduce",
        "population": 5999,
        "state": "304"
    },
    {
        "age": "MPI_Allreduce",
        "population": 56273,
        "state": "305"
    },
    {
        "age": "MPI_Allreduce",
        "population": 24164,
        "state": "306"
    },
    {
        "age": "MPI_Allreduce",
        "population": 6104,
        "state": "307"
    },
    {
        "age": "MPI_Allreduce",
        "population": 57645,
        "state": "308"
    },
    {
        "age": "MPI_Allreduce",
        "population": 37793,
        "state": "309"
    },
    {
        "age": "MPI_Allreduce",
        "population": 169911,
        "state": "31"
    },
    {
        "age": "MPI_Allreduce",
        "population": 12985,
        "state": "310"
    },
    {
        "age": "MPI_Allreduce",
        "population": 199668,
        "state": "311"
    },
    {
        "age": "MPI_Allreduce",
        "population": 19215,
        "state": "312"
    },
    {
        "age": "MPI_Allreduce",
        "population": 4816,
        "state": "313"
    },
    {
        "age": "MPI_Allreduce",
        "population": 68096,
        "state": "314"
    },
    {
        "age": "MPI_Allreduce",
        "population": 36505,
        "state": "315"
    },
    {
        "age": "MPI_Allreduce",
        "population": 6265,
        "state": "316"
    },
    {
        "age": "MPI_Allreduce",
        "population": 216328,
        "state": "317"
    },
    {
        "age": "MPI_Allreduce",
        "population": 186599,
        "state": "318"
    },
    {
        "age": "MPI_Allreduce",
        "population": 9660,
        "state": "319"
    },
    {
        "age": "MPI_Allreduce",
        "population": 20104,
        "state": "32"
    },
    {
        "age": "MPI_Allreduce",
        "population": 55741,
        "state": "320"
    },
    {
        "age": "MPI_Allreduce",
        "population": 5831,
        "state": "321"
    },
    {
        "age": "MPI_Allreduce",
        "population": 5411,
        "state": "322"
    },
    {
        "age": "MPI_Allreduce",
        "population": 326949,
        "state": "323"
    },
    {
        "age": "MPI_Allreduce",
        "population": 185465,
        "state": "324"
    },
    {
        "age": "MPI_Allreduce",
        "population": 9926,
        "state": "325"
    },
    {
        "age": "MPI_Allreduce",
        "population": 183638,
        "state": "326"
    },
    {
        "age": "MPI_Allreduce",
        "population": 19726,
        "state": "327"
    },
    {
        "age": "MPI_Allreduce",
        "population": 6216,
        "state": "328"
    },
    {
        "age": "MPI_Allreduce",
        "population": 280518,
        "state": "329"
    },
    {
        "age": "MPI_Allreduce",
        "population": 5306,
        "state": "33"
    },
    {
        "age": "MPI_Allreduce",
        "population": 176246,
        "state": "330"
    },
    {
        "age": "MPI_Allreduce",
        "population": 8169,
        "state": "331"
    },
    {
        "age": "MPI_Allreduce",
        "population": 193326,
        "state": "332"
    },
    {
        "age": "MPI_Allreduce",
        "population": 158326,
        "state": "333"
    },
    {
        "age": "MPI_Allreduce",
        "population": 9198,
        "state": "334"
    },
    {
        "age": "MPI_Allreduce",
        "population": 171752,
        "state": "335"
    },
    {
        "age": "MPI_Allreduce",
        "population": 15155,
        "state": "336"
    },
    {
        "age": "MPI_Allreduce",
        "population": 5866,
        "state": "337"
    },
    {
        "age": "MPI_Allreduce",
        "population": 329707,
        "state": "338"
    },
    {
        "age": "MPI_Allreduce",
        "population": 152383,
        "state": "339"
    },
    {
        "age": "MPI_Allreduce",
        "population": 65233,
        "state": "34"
    },
    {
        "age": "MPI_Allreduce",
        "population": 10318,
        "state": "340"
    },
    {
        "age": "MPI_Allreduce",
        "population": 185388,
        "state": "341"
    },
    {
        "age": "MPI_Allreduce",
        "population": 21798,
        "state": "342"
    },
    {
        "age": "MPI_Allreduce",
        "population": 4774,
        "state": "343"
    },
    {
        "age": "MPI_Allreduce",
        "population": 248990,
        "state": "344"
    },
    {
        "age": "MPI_Allreduce",
        "population": 257376,
        "state": "345"
    },
    {
        "age": "MPI_Allreduce",
        "population": 4984,
        "state": "346"
    },
    {
        "age": "MPI_Allreduce",
        "population": 97440,
        "state": "347"
    },
    {
        "age": "MPI_Allreduce",
        "population": 85876,
        "state": "348"
    },
    {
        "age": "MPI_Allreduce",
        "population": 5677,
        "state": "349"
    },
    {
        "age": "MPI_Allreduce",
        "population": 21945,
        "state": "35"
    },
    {
        "age": "MPI_Allreduce",
        "population": 38864,
        "state": "350"
    },
    {
        "age": "MPI_Allreduce",
        "population": 163149,
        "state": "351"
    },
    {
        "age": "MPI_Allreduce",
        "population": 6363,
        "state": "352"
    },
    {
        "age": "MPI_Allreduce",
        "population": 211764,
        "state": "353"
    },
    {
        "age": "MPI_Allreduce",
        "population": 131705,
        "state": "354"
    },
    {
        "age": "MPI_Allreduce",
        "population": 7378,
        "state": "355"
    },
    {
        "age": "MPI_Allreduce",
        "population": 65807,
        "state": "356"
    },
    {
        "age": "MPI_Allreduce",
        "population": 18277,
        "state": "357"
    },
    {
        "age": "MPI_Allreduce",
        "population": 7252,
        "state": "358"
    },
    {
        "age": "MPI_Allreduce",
        "population": 215327,
        "state": "359"
    },
    {
        "age": "MPI_Allreduce",
        "population": 5075,
        "state": "36"
    },
    {
        "age": "MPI_Allreduce",
        "population": 182203,
        "state": "360"
    },
    {
        "age": "MPI_Allreduce",
        "population": 3955,
        "state": "361"
    },
    {
        "age": "MPI_Allreduce",
        "population": 90174,
        "state": "362"
    },
    {
        "age": "MPI_Allreduce",
        "population": 22463,
        "state": "363"
    },
    {
        "age": "MPI_Allreduce",
        "population": 6048,
        "state": "364"
    },
    {
        "age": "MPI_Allreduce",
        "population": 41839,
        "state": "365"
    },
    {
        "age": "MPI_Allreduce",
        "population": 96271,
        "state": "366"
    },
    {
        "age": "MPI_Allreduce",
        "population": 6454,
        "state": "367"
    },
    {
        "age": "MPI_Allreduce",
        "population": 95809,
        "state": "368"
    },
    {
        "age": "MPI_Allreduce",
        "population": 20587,
        "state": "369"
    },
    {
        "age": "MPI_Allreduce",
        "population": 135891,
        "state": "37"
    },
    {
        "age": "MPI_Allreduce",
        "population": 9653,
        "state": "370"
    },
    {
        "age": "MPI_Allreduce",
        "population": 164297,
        "state": "371"
    },
    {
        "age": "MPI_Allreduce",
        "population": 20545,
        "state": "372"
    },
    {
        "age": "MPI_Allreduce",
        "population": 5761,
        "state": "373"
    },
    {
        "age": "MPI_Allreduce",
        "population": 83839,
        "state": "374"
    },
    {
        "age": "MPI_Allreduce",
        "population": 35749,
        "state": "375"
    },
    {
        "age": "MPI_Allreduce",
        "population": 10192,
        "state": "376"
    },
    {
        "age": "MPI_Allreduce",
        "population": 54145,
        "state": "377"
    },
    {
        "age": "MPI_Allreduce",
        "population": 201082,
        "state": "378"
    },
    {
        "age": "MPI_Allreduce",
        "population": 7315,
        "state": "379"
    },
    {
        "age": "MPI_Allreduce",
        "population": 86583,
        "state": "38"
    },
    {
        "age": "MPI_Allreduce",
        "population": 63105,
        "state": "380"
    },
    {
        "age": "MPI_Allreduce",
        "population": 18144,
        "state": "381"
    },
    {
        "age": "MPI_Allreduce",
        "population": 5726,
        "state": "382"
    },
    {
        "age": "MPI_Allreduce",
        "population": 72702,
        "state": "383"
    },
    {
        "age": "MPI_Allreduce",
        "population": 22260,
        "state": "384"
    },
    {
        "age": "MPI_Allreduce",
        "population": 6832,
        "state": "385"
    },
    {
        "age": "MPI_Allreduce",
        "population": 192647,
        "state": "386"
    },
    {
        "age": "MPI_Allreduce",
        "population": 24920,
        "state": "387"
    },
    {
        "age": "MPI_Allreduce",
        "population": 4697,
        "state": "388"
    },
    {
        "age": "MPI_Allreduce",
        "population": 69174,
        "state": "389"
    },
    {
        "age": "MPI_Allreduce",
        "population": 4760,
        "state": "39"
    },
    {
        "age": "MPI_Allreduce",
        "population": 21539,
        "state": "390"
    },
    {
        "age": "MPI_Allreduce",
        "population": 6657,
        "state": "391"
    },
    {
        "age": "MPI_Allreduce",
        "population": 225736,
        "state": "392"
    },
    {
        "age": "MPI_Allreduce",
        "population": 109970,
        "state": "393"
    },
    {
        "age": "MPI_Allreduce",
        "population": 6188,
        "state": "394"
    },
    {
        "age": "MPI_Allreduce",
        "population": 64197,
        "state": "395"
    },
    {
        "age": "MPI_Allreduce",
        "population": 48027,
        "state": "396"
    },
    {
        "age": "MPI_Allreduce",
        "population": 5215,
        "state": "397"
    },
    {
        "age": "MPI_Allreduce",
        "population": 279209,
        "state": "398"
    },
    {
        "age": "MPI_Allreduce",
        "population": 42644,
        "state": "399"
    },
    {
        "age": "MPI_Allreduce",
        "population": 105042,
        "state": "4"
    },
    {
        "age": "MPI_Allreduce",
        "population": 130165,
        "state": "40"
    },
    {
        "age": "MPI_Allreduce",
        "population": 13846,
        "state": "400"
    },
    {
        "age": "MPI_Allreduce",
        "population": 98,
        "state": "401"
    },
    {
        "age": "MPI_Allreduce",
        "population": 179410,
        "state": "402"
    },
    {
        "age": "MPI_Allreduce",
        "population": 171661,
        "state": "403"
    },
    {
        "age": "MPI_Allreduce",
        "population": 24542,
        "state": "404"
    },
    {
        "age": "MPI_Allreduce",
        "population": 6454,
        "state": "405"
    },
    {
        "age": "MPI_Allreduce",
        "population": 238924,
        "state": "406"
    },
    {
        "age": "MPI_Allreduce",
        "population": 273987,
        "state": "407"
    },
    {
        "age": "MPI_Allreduce",
        "population": 18683,
        "state": "408"
    },
    {
        "age": "MPI_Allreduce",
        "population": 203651,
        "state": "409"
    },
    {
        "age": "MPI_Allreduce",
        "population": 20531,
        "state": "41"
    },
    {
        "age": "MPI_Allreduce",
        "population": 80766,
        "state": "410"
    },
    {
        "age": "MPI_Allreduce",
        "population": 6272,
        "state": "411"
    },
    {
        "age": "MPI_Allreduce",
        "population": 39487,
        "state": "412"
    },
    {
        "age": "MPI_Allreduce",
        "population": 21000,
        "state": "413"
    },
    {
        "age": "MPI_Allreduce",
        "population": 5873,
        "state": "414"
    },
    {
        "age": "MPI_Allreduce",
        "population": 256634,
        "state": "415"
    },
    {
        "age": "MPI_Allreduce",
        "population": 166922,
        "state": "416"
    },
    {
        "age": "MPI_Allreduce",
        "population": 5915,
        "state": "417"
    },
    {
        "age": "MPI_Allreduce",
        "population": 175784,
        "state": "418"
    },
    {
        "age": "MPI_Allreduce",
        "population": 21455,
        "state": "419"
    },
    {
        "age": "MPI_Allreduce",
        "population": 6006,
        "state": "42"
    },
    {
        "age": "MPI_Allreduce",
        "population": 5131,
        "state": "420"
    },
    {
        "age": "MPI_Allreduce",
        "population": 253974,
        "state": "421"
    },
    {
        "age": "MPI_Allreduce",
        "population": 218708,
        "state": "422"
    },
    {
        "age": "MPI_Allreduce",
        "population": 12306,
        "state": "423"
    },
    {
        "age": "MPI_Allreduce",
        "population": 177821,
        "state": "424"
    },
    {
        "age": "MPI_Allreduce",
        "population": 166418,
        "state": "425"
    },
    {
        "age": "MPI_Allreduce",
        "population": 6013,
        "state": "426"
    },
    {
        "age": "MPI_Allreduce",
        "population": 52003,
        "state": "427"
    },
    {
        "age": "MPI_Allreduce",
        "population": 22659,
        "state": "428"
    },
    {
        "age": "MPI_Allreduce",
        "population": 10136,
        "state": "429"
    },
    {
        "age": "MPI_Allreduce",
        "population": 56217,
        "state": "43"
    },
    {
        "age": "MPI_Allreduce",
        "population": 208901,
        "state": "430"
    },
    {
        "age": "MPI_Allreduce",
        "population": 174342,
        "state": "431"
    },
    {
        "age": "MPI_Allreduce",
        "population": 5929,
        "state": "432"
    },
    {
        "age": "MPI_Allreduce",
        "population": 63987,
        "state": "433"
    },
    {
        "age": "MPI_Allreduce",
        "population": 24409,
        "state": "434"
    },
    {
        "age": "MPI_Allreduce",
        "population": 6384,
        "state": "435"
    },
    {
        "age": "MPI_Allreduce",
        "population": 228396,
        "state": "436"
    },
    {
        "age": "MPI_Allreduce",
        "population": 189728,
        "state": "437"
    },
    {
        "age": "MPI_Allreduce",
        "population": 10871,
        "state": "438"
    },
    {
        "age": "MPI_Allreduce",
        "population": 65170,
        "state": "439"
    },
    {
        "age": "MPI_Allreduce",
        "population": 19656,
        "state": "44"
    },
    {
        "age": "MPI_Allreduce",
        "population": 37919,
        "state": "440"
    },
    {
        "age": "MPI_Allreduce",
        "population": 10388,
        "state": "441"
    },
    {
        "age": "MPI_Allreduce",
        "population": 51233,
        "state": "442"
    },
    {
        "age": "MPI_Allreduce",
        "population": 88186,
        "state": "443"
    },
    {
        "age": "MPI_Allreduce",
        "population": 10255,
        "state": "444"
    },
    {
        "age": "MPI_Allreduce",
        "population": 198128,
        "state": "445"
    },
    {
        "age": "MPI_Allreduce",
        "population": 24087,
        "state": "446"
    },
    {
        "age": "MPI_Allreduce",
        "population": 6510,
        "state": "447"
    },
    {
        "age": "MPI_Allreduce",
        "population": 91763,
        "state": "448"
    },
    {
        "age": "MPI_Allreduce",
        "population": 21847,
        "state": "449"
    },
    {
        "age": "MPI_Allreduce",
        "population": 4074,
        "state": "45"
    },
    {
        "age": "MPI_Allreduce",
        "population": 7252,
        "state": "450"
    },
    {
        "age": "MPI_Allreduce",
        "population": 118475,
        "state": "451"
    },
    {
        "age": "MPI_Allreduce",
        "population": 87444,
        "state": "452"
    },
    {
        "age": "MPI_Allreduce",
        "population": 26005,
        "state": "453"
    },
    {
        "age": "MPI_Allreduce",
        "population": 246757,
        "state": "454"
    },
    {
        "age": "MPI_Allreduce",
        "population": 27090,
        "state": "455"
    },
    {
        "age": "MPI_Allreduce",
        "population": 6237,
        "state": "456"
    },
    {
        "age": "MPI_Allreduce",
        "population": 53256,
        "state": "457"
    },
    {
        "age": "MPI_Allreduce",
        "population": 44310,
        "state": "458"
    },
    {
        "age": "MPI_Allreduce",
        "population": 4984,
        "state": "459"
    },
    {
        "age": "MPI_Allreduce",
        "population": 71855,
        "state": "46"
    },
    {
        "age": "MPI_Allreduce",
        "population": 70826,
        "state": "460"
    },
    {
        "age": "MPI_Allreduce",
        "population": 20517,
        "state": "461"
    },
    {
        "age": "MPI_Allreduce",
        "population": 4186,
        "state": "462"
    },
    {
        "age": "MPI_Allreduce",
        "population": 70245,
        "state": "463"
    },
    {
        "age": "MPI_Allreduce",
        "population": 18032,
        "state": "464"
    },
    {
        "age": "MPI_Allreduce",
        "population": 6552,
        "state": "465"
    },
    {
        "age": "MPI_Allreduce",
        "population": 68754,
        "state": "466"
    },
    {
        "age": "MPI_Allreduce",
        "population": 23597,
        "state": "467"
    },
    {
        "age": "MPI_Allreduce",
        "population": 5551,
        "state": "468"
    },
    {
        "age": "MPI_Allreduce",
        "population": 59129,
        "state": "469"
    },
    {
        "age": "MPI_Allreduce",
        "population": 27601,
        "state": "47"
    },
    {
        "age": "MPI_Allreduce",
        "population": 171794,
        "state": "470"
    },
    {
        "age": "MPI_Allreduce",
        "population": 6279,
        "state": "471"
    },
    {
        "age": "MPI_Allreduce",
        "population": 52591,
        "state": "472"
    },
    {
        "age": "MPI_Allreduce",
        "population": 21651,
        "state": "473"
    },
    {
        "age": "MPI_Allreduce",
        "population": 6825,
        "state": "474"
    },
    {
        "age": "MPI_Allreduce",
        "population": 85407,
        "state": "475"
    },
    {
        "age": "MPI_Allreduce",
        "population": 64547,
        "state": "476"
    },
    {
        "age": "MPI_Allreduce",
        "population": 14427,
        "state": "477"
    },
    {
        "age": "MPI_Allreduce",
        "population": 179536,
        "state": "478"
    },
    {
        "age": "MPI_Allreduce",
        "population": 24920,
        "state": "479"
    },
    {
        "age": "MPI_Allreduce",
        "population": 10332,
        "state": "48"
    },
    {
        "age": "MPI_Allreduce",
        "population": 4739,
        "state": "480"
    },
    {
        "age": "MPI_Allreduce",
        "population": 89222,
        "state": "481"
    },
    {
        "age": "MPI_Allreduce",
        "population": 222019,
        "state": "482"
    },
    {
        "age": "MPI_Allreduce",
        "population": 5201,
        "state": "483"
    },
    {
        "age": "MPI_Allreduce",
        "population": 212604,
        "state": "484"
    },
    {
        "age": "MPI_Allreduce",
        "population": 179648,
        "state": "485"
    },
    {
        "age": "MPI_Allreduce",
        "population": 5565,
        "state": "486"
    },
    {
        "age": "MPI_Allreduce",
        "population": 35728,
        "state": "487"
    },
    {
        "age": "MPI_Allreduce",
        "population": 15610,
        "state": "488"
    },
    {
        "age": "MPI_Allreduce",
        "population": 6286,
        "state": "489"
    },
    {
        "age": "MPI_Allreduce",
        "population": 63693,
        "state": "49"
    },
    {
        "age": "MPI_Allreduce",
        "population": 285411,
        "state": "490"
    },
    {
        "age": "MPI_Allreduce",
        "population": 177905,
        "state": "491"
    },
    {
        "age": "MPI_Allreduce",
        "population": 5026,
        "state": "492"
    },
    {
        "age": "MPI_Allreduce",
        "population": 172928,
        "state": "493"
    },
    {
        "age": "MPI_Allreduce",
        "population": 18795,
        "state": "494"
    },
    {
        "age": "MPI_Allreduce",
        "population": 5138,
        "state": "495"
    },
    {
        "age": "MPI_Allreduce",
        "population": 233464,
        "state": "496"
    },
    {
        "age": "MPI_Allreduce",
        "population": 179711,
        "state": "497"
    },
    {
        "age": "MPI_Allreduce",
        "population": 6748,
        "state": "498"
    },
    {
        "age": "MPI_Allreduce",
        "population": 200445,
        "state": "499"
    },
    {
        "age": "MPI_Allreduce",
        "population": 159166,
        "state": "5"
    },
    {
        "age": "MPI_Allreduce",
        "population": 24787,
        "state": "50"
    },
    {
        "age": "MPI_Allreduce",
        "population": 21763,
        "state": "500"
    },
    {
        "age": "MPI_Allreduce",
        "population": 6048,
        "state": "501"
    },
    {
        "age": "MPI_Allreduce",
        "population": 12908,
        "state": "502"
    },
    {
        "age": "MPI_Allreduce",
        "population": 228123,
        "state": "503"
    },
    {
        "age": "MPI_Allreduce",
        "population": 6188,
        "state": "504"
    },
    {
        "age": "MPI_Allreduce",
        "population": 264327,
        "state": "505"
    },
    {
        "age": "MPI_Allreduce",
        "population": 180544,
        "state": "506"
    },
    {
        "age": "MPI_Allreduce",
        "population": 6223,
        "state": "507"
    },
    {
        "age": "MPI_Allreduce",
        "population": 187530,
        "state": "508"
    },
    {
        "age": "MPI_Allreduce",
        "population": 21000,
        "state": "509"
    },
    {
        "age": "MPI_Allreduce",
        "population": 5446,
        "state": "51"
    },
    {
        "age": "MPI_Allreduce",
        "population": 4578,
        "state": "510"
    },
    {
        "age": "MPI_Allreduce",
        "population": 236502,
        "state": "511"
    },
    {
        "age": "MPI_Allreduce",
        "population": 269724,
        "state": "512"
    },
    {
        "age": "MPI_Allreduce",
        "population": 6867,
        "state": "513"
    },
    {
        "age": "MPI_Allreduce",
        "population": 102970,
        "state": "514"
    },
    {
        "age": "MPI_Allreduce",
        "population": 80612,
        "state": "515"
    },
    {
        "age": "MPI_Allreduce",
        "population": 5740,
        "state": "516"
    },
    {
        "age": "MPI_Allreduce",
        "population": 40383,
        "state": "517"
    },
    {
        "age": "MPI_Allreduce",
        "population": 18893,
        "state": "518"
    },
    {
        "age": "MPI_Allreduce",
        "population": 5719,
        "state": "519"
    },
    {
        "age": "MPI_Allreduce",
        "population": 58135,
        "state": "52"
    },
    {
        "age": "MPI_Allreduce",
        "population": 202097,
        "state": "520"
    },
    {
        "age": "MPI_Allreduce",
        "population": 159369,
        "state": "521"
    },
    {
        "age": "MPI_Allreduce",
        "population": 5733,
        "state": "522"
    },
    {
        "age": "MPI_Allreduce",
        "population": 66185,
        "state": "523"
    },
    {
        "age": "MPI_Allreduce",
        "population": 21532,
        "state": "524"
    },
    {
        "age": "MPI_Allreduce",
        "population": 5922,
        "state": "525"
    },
    {
        "age": "MPI_Allreduce",
        "population": 225155,
        "state": "526"
    },
    {
        "age": "MPI_Allreduce",
        "population": 170737,
        "state": "527"
    },
    {
        "age": "MPI_Allreduce",
        "population": 9093,
        "state": "528"
    },
    {
        "age": "MPI_Allreduce",
        "population": 60046,
        "state": "529"
    },
    {
        "age": "MPI_Allreduce",
        "population": 18956,
        "state": "53"
    },
    {
        "age": "MPI_Allreduce",
        "population": 22764,
        "state": "530"
    },
    {
        "age": "MPI_Allreduce",
        "population": 5537,
        "state": "531"
    },
    {
        "age": "MPI_Allreduce",
        "population": 28147,
        "state": "532"
    },
    {
        "age": "MPI_Allreduce",
        "population": 93674,
        "state": "533"
    },
    {
        "age": "MPI_Allreduce",
        "population": 6552,
        "state": "534"
    },
    {
        "age": "MPI_Allreduce",
        "population": 93492,
        "state": "535"
    },
    {
        "age": "MPI_Allreduce",
        "population": 23457,
        "state": "536"
    },
    {
        "age": "MPI_Allreduce",
        "population": 5488,
        "state": "537"
    },
    {
        "age": "MPI_Allreduce",
        "population": 60221,
        "state": "538"
    },
    {
        "age": "MPI_Allreduce",
        "population": 17752,
        "state": "539"
    },
    {
        "age": "MPI_Allreduce",
        "population": 3640,
        "state": "54"
    },
    {
        "age": "MPI_Allreduce",
        "population": 5474,
        "state": "540"
    },
    {
        "age": "MPI_Allreduce",
        "population": 119294,
        "state": "541"
    },
    {
        "age": "MPI_Allreduce",
        "population": 38885,
        "state": "542"
    },
    {
        "age": "MPI_Allreduce",
        "population": 6839,
        "state": "543"
    },
    {
        "age": "MPI_Allreduce",
        "population": 58534,
        "state": "544"
    },
    {
        "age": "MPI_Allreduce",
        "population": 192983,
        "state": "545"
    },
    {
        "age": "MPI_Allreduce",
        "population": 6146,
        "state": "546"
    },
    {
        "age": "MPI_Allreduce",
        "population": 57806,
        "state": "547"
    },
    {
        "age": "MPI_Allreduce",
        "population": 23170,
        "state": "548"
    },
    {
        "age": "MPI_Allreduce",
        "population": 4683,
        "state": "549"
    },
    {
        "age": "MPI_Allreduce",
        "population": 59787,
        "state": "55"
    },
    {
        "age": "MPI_Allreduce",
        "population": 70385,
        "state": "550"
    },
    {
        "age": "MPI_Allreduce",
        "population": 25788,
        "state": "551"
    },
    {
        "age": "MPI_Allreduce",
        "population": 4270,
        "state": "552"
    },
    {
        "age": "MPI_Allreduce",
        "population": 623,
        "state": "553"
    },
    {
        "age": "MPI_Allreduce",
        "population": 28,
        "state": "554"
    },
    {
        "age": "MPI_Allreduce",
        "population": 35,
        "state": "555"
    },
    {
        "age": "MPI_Allreduce",
        "population": 21665,
        "state": "56"
    },
    {
        "age": "MPI_Allreduce",
        "population": 8841,
        "state": "57"
    },
    {
        "age": "MPI_Allreduce",
        "population": 60963,
        "state": "58"
    },
    {
        "age": "MPI_Allreduce",
        "population": 23695,
        "state": "59"
    },
    {
        "age": "MPI_Allreduce",
        "population": 9814,
        "state": "6"
    },
    {
        "age": "MPI_Allreduce",
        "population": 5782,
        "state": "60"
    },
    {
        "age": "MPI_Allreduce",
        "population": 59521,
        "state": "61"
    },
    {
        "age": "MPI_Allreduce",
        "population": 32375,
        "state": "62"
    },
    {
        "age": "MPI_Allreduce",
        "population": 8659,
        "state": "63"
    },
    {
        "age": "MPI_Allreduce",
        "population": 59479,
        "state": "64"
    },
    {
        "age": "MPI_Allreduce",
        "population": 23247,
        "state": "65"
    },
    {
        "age": "MPI_Allreduce",
        "population": 11942,
        "state": "66"
    },
    {
        "age": "MPI_Allreduce",
        "population": 60207,
        "state": "67"
    },
    {
        "age": "MPI_Allreduce",
        "population": 22645,
        "state": "68"
    },
    {
        "age": "MPI_Allreduce",
        "population": 5446,
        "state": "69"
    },
    {
        "age": "MPI_Allreduce",
        "population": 2009,
        "state": "7"
    },
    {
        "age": "MPI_Allreduce",
        "population": 62580,
        "state": "70"
    },
    {
        "age": "MPI_Allreduce",
        "population": 26334,
        "state": "71"
    },
    {
        "age": "MPI_Allreduce",
        "population": 5789,
        "state": "72"
    },
    {
        "age": "MPI_Allreduce",
        "population": 227577,
        "state": "73"
    },
    {
        "age": "MPI_Allreduce",
        "population": 27097,
        "state": "74"
    },
    {
        "age": "MPI_Allreduce",
        "population": 6790,
        "state": "75"
    },
    {
        "age": "MPI_Allreduce",
        "population": 64407,
        "state": "76"
    },
    {
        "age": "MPI_Allreduce",
        "population": 22162,
        "state": "77"
    },
    {
        "age": "MPI_Allreduce",
        "population": 4823,
        "state": "78"
    },
    {
        "age": "MPI_Allreduce",
        "population": 61544,
        "state": "79"
    },
    {
        "age": "MPI_Allreduce",
        "population": 441,
        "state": "8"
    },
    {
        "age": "MPI_Allreduce",
        "population": 22708,
        "state": "80"
    },
    {
        "age": "MPI_Allreduce",
        "population": 4396,
        "state": "81"
    },
    {
        "age": "MPI_Allreduce",
        "population": 62657,
        "state": "82"
    },
    {
        "age": "MPI_Allreduce",
        "population": 20391,
        "state": "83"
    },
    {
        "age": "MPI_Allreduce",
        "population": 6405,
        "state": "84"
    },
    {
        "age": "MPI_Allreduce",
        "population": 76293,
        "state": "85"
    },
    {
        "age": "MPI_Allreduce",
        "population": 23492,
        "state": "86"
    },
    {
        "age": "MPI_Allreduce",
        "population": 6657,
        "state": "87"
    },
    {
        "age": "MPI_Allreduce",
        "population": 219688,
        "state": "88"
    },
    {
        "age": "MPI_Allreduce",
        "population": 22344,
        "state": "89"
    },
    {
        "age": "MPI_Allreduce",
        "population": 32935,
        "state": "9"
    },
    {
        "age": "MPI_Allreduce",
        "population": 8477,
        "state": "90"
    },
    {
        "age": "MPI_Allreduce",
        "population": 58464,
        "state": "91"
    },
    {
        "age": "MPI_Allreduce",
        "population": 25340,
        "state": "92"
    },
    {
        "age": "MPI_Allreduce",
        "population": 5621,
        "state": "93"
    },
    {
        "age": "MPI_Allreduce",
        "population": 185479,
        "state": "94"
    },
    {
        "age": "MPI_Allreduce",
        "population": 188104,
        "state": "95"
    },
    {
        "age": "MPI_Allreduce",
        "population": 5530,
        "state": "96"
    },
    {
        "age": "MPI_Allreduce",
        "population": 64687,
        "state": "97"
    },
    {
        "age": "MPI_Allreduce",
        "population": 22981,
        "state": "98"
    },
    {
        "age": "MPI_Allreduce",
        "population": 5124,
        "state": "99"
    }
]
const data2: TagStatsDataPoint[] = [
    {
        "age": "MPI_Allreduce",
        "population": 5852889,
        "state": "2"
    },
  {
      "state": "AL",
      "age": "\u003C10",
      "population": 598478
  },
  {
      "state": "AK",
      "age": "\u003C10",
      "population": 106741
  },
  {
      "state": "AZ",
      "age": "\u003C10",
      "population": 892083
  },
  {
      "state": "AR",
      "age": "\u003C10",
      "population": 392177
  },
  {
      "state": "CA",
      "age": "\u003C10",
      "population": 5038433
  },
  {
      "state": "CO",
      "age": "\u003C10",
      "population": 690830
  },
  {
      "state": "CT",
      "age": "\u003C10",
      "population": 399369
  },
  {
      "state": "DE",
      "age": "\u003C10",
      "population": 112177
  },
  {
      "state": "DC",
      "age": "\u003C10",
      "population": 74377
  },
  {
      "state": "FL",
      "age": "\u003C10",
      "population": 2211012
  },
  {
      "state": "GA",
      "age": "\u003C10",
      "population": 1363631
  },
  {
      "state": "HI",
      "age": "\u003C10",
      "population": 176484
  },
  {
      "state": "ID",
      "age": "\u003C10",
      "population": 236658
  },
  {
      "state": "IL",
      "age": "\u003C10",
      "population": 1619682
  },
  {
      "state": "IN",
      "age": "\u003C10",
      "population": 863029
  },
  {
      "state": "IA",
      "age": "\u003C10",
      "population": 401712
  },
  {
      "state": "KS",
      "age": "\u003C10",
      "population": 401751
  },
  {
      "state": "KY",
      "age": "\u003C10",
      "population": 555615
  },
  {
      "state": "LA",
      "age": "\u003C10",
      "population": 622061
  },
  {
      "state": "ME",
      "age": "\u003C10",
      "population": 137954
  },
  {
      "state": "MD",
      "age": "\u003C10",
      "population": 741952
  },
  {
      "state": "MA",
      "age": "\u003C10",
      "population": 737748
  },
  {
      "state": "MI",
      "age": "\u003C10",
      "population": 1181424
  },
  {
      "state": "MN",
      "age": "\u003C10",
      "population": 711604
  },
  {
      "state": "MS",
      "age": "\u003C10",
      "population": 400288
  },
  {
      "state": "MO",
      "age": "\u003C10",
      "population": 763948
  },
  {
      "state": "MT",
      "age": "\u003C10",
      "population": 126020
  },
  {
      "state": "NE",
      "age": "\u003C10",
      "population": 263518
  },
  {
      "state": "NV",
      "age": "\u003C10",
      "population": 369362
  },
  {
      "state": "NH",
      "age": "\u003C10",
      "population": 138762
  },
  {
      "state": "NJ",
      "age": "\u003C10",
      "population": 1079136
  },
  {
      "state": "NM",
      "age": "\u003C10",
      "population": 276468
  },
  {
      "state": "NY",
      "age": "\u003C10",
      "population": 2319945
  },
  {
      "state": "NC",
      "age": "\u003C10",
      "population": 1250298
  },
  {
      "state": "ND",
      "age": "\u003C10",
      "population": 99477
  },
  {
      "state": "OH",
      "age": "\u003C10",
      "population": 1422838
  },
  {
      "state": "OK",
      "age": "\u003C10",
      "population": 534481
  },
  {
      "state": "OR",
      "age": "\u003C10",
      "population": 474456
  },
  {
      "state": "PA",
      "age": "\u003C10",
      "population": 1458931
  },
  {
      "state": "RI",
      "age": "\u003C10",
      "population": 111377
  },
  {
      "state": "SC",
      "age": "\u003C10",
      "population": 599591
  },
  {
      "state": "SD",
      "age": "\u003C10",
      "population": 120366
  },
  {
      "state": "TN",
      "age": "\u003C10",
      "population": 818404
  },
  {
      "state": "TX",
      "age": "\u003C10",
      "population": 3983091
  },
  {
      "state": "UT",
      "age": "\u003C10",
      "population": 513515
  },
  {
      "state": "VT",
      "age": "\u003C10",
      "population": 63768
  },
  {
      "state": "VA",
      "age": "\u003C10",
      "population": 1033629
  },
  {
      "state": "WA",
      "age": "\u003C10",
      "population": 895790
  },
  {
      "state": "WV",
      "age": "\u003C10",
      "population": 207017
  },
  {
      "state": "WI",
      "age": "\u003C10",
      "population": 705648
  },
  {
      "state": "WY",
      "age": "\u003C10",
      "population": 78217
  },
  {
      "state": "PR",
      "age": "\u003C10",
      "population": 389428
  },
  {
      "state": "AL",
      "age": "10-19",
      "population": 638789
  },
  {
      "state": "AK",
      "age": "10-19",
      "population": 99926
  },
  {
      "state": "AZ",
      "age": "10-19",
      "population": 912735
  },
  {
      "state": "AR",
      "age": "10-19",
      "population": 397185
  },
  {
      "state": "CA",
      "age": "10-19",
      "population": 5170341
  },
  {
      "state": "CO",
      "age": "10-19",
      "population": 697447
  },
  {
      "state": "CT",
      "age": "10-19",
      "population": 481065
  },
  {
      "state": "PR",
      "age": "≥80",
      "population": 148963
  }
]

function App() {

  const [folderPath, setFolderPath] = useState('');
  const [processData, setProcessData] = useState<{ [key: string]: any }>({});
//   const [processTagData, setProcessTagData] = useState<TagStatsDataPoint[]>(data2);

  const handleFolderSelection = async () => {
    setProcessData(() => {return {}});
    if(folderPath === '') {
      alert('Please enter a valid path');
      return;
    }
    await axios({
      method: 'post',
    //   url: 'http://localhost:5000/api/process_tag_data',
      url: 'http://localhost:5000/api/process_data',
      data: {
        folderPath: folderPath
      }
    }).then((response) => {
      console.log(response.data[0]);
      setProcessData(response.data);
    //   setProcessTagData(() => response.data[0]);
    }).catch((error) => {
      console.log(error);
    });
  };

  const onInputChange = (event: any) => {
      setFolderPath(() => (event.target.value));
  };

  return (
    <>
      <NavBar loaderFunc={async () => await handleFolderSelection()} onInputChange={onInputChange}/>
        {/* <TagStats data={processTagData}/> */}
      <h2 style={{margin:"20px 30px"}}>MPI Function Timelines</h2>
      {Object.keys(processData).map((file: any) => {
        return <Timeline key={file} file={file} data={processData[file].data} overallStart={processData[file].start} overallEnd={processData[file].end} />
      })}
    </>
  )
}

export default App

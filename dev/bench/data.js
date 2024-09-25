window.BENCHMARK_DATA = {
  "lastUpdate": 1727224230801,
  "repoUrl": "https://github.com/wmedrano/steel",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "name": "Will Medrano",
            "username": "wmedrano",
            "email": "will.s.medrano@gmail.com"
          },
          "committer": {
            "name": "Will Medrano",
            "username": "wmedrano",
            "email": "will.s.medrano@gmail.com"
          },
          "id": "4c1a0acf9cd7d3d821c2c63fa47982248c87f1b4",
          "message": "Fix doc.",
          "timestamp": "2024-09-24T05:53:19Z",
          "url": "https://github.com/wmedrano/steel/commit/4c1a0acf9cd7d3d821c2c63fa47982248c87f1b4"
        },
        "date": 1727224230345,
        "tool": "cargo",
        "benches": [
          {
            "name": "range-big",
            "value": 100298,
            "range": "± 1373",
            "unit": "ns/iter"
          },
          {
            "name": "map-big",
            "value": 625292,
            "range": "± 2080",
            "unit": "ns/iter"
          },
          {
            "name": "transducer-map",
            "value": 1626529,
            "range": "± 11253",
            "unit": "ns/iter"
          },
          {
            "name": "filter-big",
            "value": 382073,
            "range": "± 874",
            "unit": "ns/iter"
          },
          {
            "name": "ten-thousand-iterations",
            "value": 766608,
            "range": "± 11618",
            "unit": "ns/iter"
          },
          {
            "name": "ten-thousand-iterations-letrec",
            "value": 1406345,
            "range": "± 13298",
            "unit": "ns/iter"
          },
          {
            "name": "trie-sort-without-optimizations",
            "value": 481507,
            "range": "± 5203",
            "unit": "ns/iter"
          },
          {
            "name": "fib-28/fib-28",
            "value": 67549976,
            "range": "± 2004225",
            "unit": "ns/iter"
          },
          {
            "name": "thread-creation/thread-creation",
            "value": 874700,
            "range": "± 8428",
            "unit": "ns/iter"
          },
          {
            "name": "engine-creation",
            "value": 28853366,
            "range": "± 519126",
            "unit": "ns/iter"
          },
          {
            "name": "register-fn",
            "value": 192,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "multiple-transducers",
            "value": 8748,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "ackermann-3-3",
            "value": 353310,
            "range": "± 2739",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}
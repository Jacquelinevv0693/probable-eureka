import "./Rainbow.css";

export default function About() {

    const loogieSrc = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBpZD0iZXllMSI+PGVsbGlwc2Ugc3Ryb2tlLXdpZHRoPSIzIiByeT0iMjkuNSIgcng9IjI5LjUiIGlkPSJzdmdfMSIgY3k9IjE1NC41IiBjeD0iMTgxLjUiIHN0cm9rZT0iIzAwMCIgZmlsbD0iI2ZmZiIvPjxlbGxpcHNlIHJ5PSIzLjUiIHJ4PSIyLjUiIGlkPSJzdmdfMyIgY3k9IjE1NC41IiBjeD0iMTczLjUiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlPSIjMDAwIiBmaWxsPSIjMDAwMDAwIi8+PC9nPjxnIGlkPSJoZWFkIj48ZWxsaXBzZSBmaWxsPSIjYWE5ZWU0IiBzdHJva2Utd2lkdGg9IjMiIGN4PSIyMDQuNSIgY3k9IjIxMS44MDA2NSIgaWQ9InN2Z181IiByeD0iNTEiIHJ5PSI1MS44MDA2NSIgc3Ryb2tlPSIjMDAwIi8+PC9nPjxnIGlkPSJleWUyIj48ZWxsaXBzZSBzdHJva2Utd2lkdGg9IjMiIHJ5PSIyOS41IiByeD0iMjkuNSIgaWQ9InN2Z18yIiBjeT0iMTY4LjUiIGN4PSIyMDkuNSIgc3Ryb2tlPSIjMDAwIiBmaWxsPSIjZmZmIi8+PGVsbGlwc2Ugcnk9IjMuNSIgcng9IjMiIGlkPSJzdmdfNCIgY3k9IjE2OS41IiBjeD0iMjA4IiBzdHJva2Utd2lkdGg9IjMiIGZpbGw9IiMwMDAwMDAiIHN0cm9rZT0iIzAwMCIvPjwvZz48ZyBjbGFzcz0ibW91dGgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMxLDApIj48cGF0aCBkPSJNIDEzMCAyNDAgUSAxNjUgMjUwIDE5MSAyMzUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMyIgZmlsbD0idHJhbnNwYXJlbnQiLz48L2c+PC9zdmc+";
    const fancyLoogieSrc = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBpZD0iZXllMSI+PGVsbGlwc2Ugc3Ryb2tlLXdpZHRoPSIzIiByeT0iMjkuNSIgcng9IjI5LjUiIGlkPSJzdmdfMSIgY3k9IjE1NC41IiBjeD0iMTgxLjUiIHN0cm9rZT0iIzAwMCIgZmlsbD0iI2ZmZiIvPjxlbGxpcHNlIHJ5PSIzLjUiIHJ4PSIyLjUiIGlkPSJzdmdfMyIgY3k9IjE1NC41IiBjeD0iMTczLjUiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlPSIjMDAwIiBmaWxsPSIjMDAwMDAwIi8+PC9nPjxnIGlkPSJoZWFkIj48ZWxsaXBzZSBmaWxsPSIjYjkwYjcxIiBzdHJva2Utd2lkdGg9IjMiIGN4PSIyMDQuNSIgY3k9IjIxMS44MDA2NSIgaWQ9InN2Z181IiByeD0iNjIiIHJ5PSI1MS44MDA2NSIgc3Ryb2tlPSIjMDAwIi8+PC9nPjxnIGlkPSJleWUyIj48ZWxsaXBzZSBzdHJva2Utd2lkdGg9IjMiIHJ5PSIyOS41IiByeD0iMjkuNSIgaWQ9InN2Z18yIiBjeT0iMTY4LjUiIGN4PSIyMDkuNSIgc3Ryb2tlPSIjMDAwIiBmaWxsPSIjZmZmIi8+PGVsbGlwc2Ugcnk9IjMuNSIgcng9IjMiIGlkPSJzdmdfNCIgY3k9IjE2OS41IiBjeD0iMjA4IiBzdHJva2Utd2lkdGg9IjMiIGZpbGw9IiMwMDAwMDAiIHN0cm9rZT0iIzAwMCIvPjwvZz48ZyBjbGFzcz0ibW91dGgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIyLDApIj48cGF0aCBkPSJNIDEzMCAyNDAgUSAxNjUgMjUwIDE4NSAyMzUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMyIgZmlsbD0idHJhbnNwYXJlbnQiLz48L2c+PGcgY2xhc3M9ImJvdyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTgwLDIzNSkgc2NhbGUoMC4xMCAwLjEwKSI+PHBhdGggZmlsbD0iI2ZiN2RjYiIgZD0iTTQ3Ni41MzIsMTM1LjM5NmMtMTIuNTg0LTcuNzk2LTI5LTcuMzU2LTQ2LjI0OCwxLjIyOGwtMTE3Ljg2OCw1OS44OGMtMTAuMDQ4LTkuNy0yMy43MjgtMTQuNDUyLTM4LjgxNi0xNC40NTJoLTUwLjE1NmMtMTUuMjA0LDAtMjguOTkyLDQuODI4LTM5LjA2NCwxNC42NTJMNjYuMSwxMzcuMjU2Yy0xNy4yMzItOC41OC0zMy44MzYtOS4zMzYtNDYuNDEyLTEuNTQ0QzcuMSwxNDMuNTA4LDAsMTU4LjEsMCwxNzcuMzY4djE0MS4xMDRjMCwxOS4yNjgsNy4xLDM0LjE4LDE5LjY4LDQxLjk2YzUuOTcyLDMuNzA4LDEyLjkwNCw1LjU1NiwyMC4yOCw1LjU1NmM4LjE2NCwwLDE3LjA0LTIuMjU2LDI2LjA5Mi02Ljc2NGwxMTguMzEyLTU4LjE0YzEwLjA3Miw5LjgyNCwyMy44OCwxNi41ODgsMzkuMDgsMTYuNTg4SDI3My42YzE1LjA4NCwwLDI4Ljc4LTYuNjkyLDM4LjgyLTE2LjM5NmwxMTcuODg0LDU4LjI3NmM5LjA2OCw0LjUxMiwxNy45LDYuNTk2LDI2LjA2NCw2LjU5NmM3LjM4OCwwLDE0LjE5Mi0xLjkyOCwyMC4xNjQtNS42MzZDNDg5LjEwOCwzNTIuNzIsNDk2LDMzNy43NDQsNDk2LDMxOC40NzZWMTc3LjM2OEM0OTYsMTU4LjEsNDg5LjEwOCwxNDMuMTkyLDQ3Ni41MzIsMTM1LjM5NnoiLz48YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIGF0dHJpYnV0ZVR5cGU9IlhNTCIgdHlwZT0icm90YXRlIiBmcm9tPSIwIDIzNSAyNDUiIHRvPSIzNjAgMjM1IDI0NSIgYmVnaW49IjBzIiBkdXI9IjJzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYWRkaXRpdmU9InN1bSIgLz48L2c+PGcgY2xhc3M9Im11c3RhY2hlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNDAsMTk1KSBzY2FsZSgxLjUwIDEuNTApIj48cGF0aCBmaWxsPSIjY2ZkZmEyIiBkPSJNMjEuNDU1LDEzLjAyNWMtMC42MDQtMy4wNjUtNS44NjEtNC44ODEtNy4wODMtMi41ODNjLTEuMjItMi4yOTktNi40NzctMC40ODMtNy4wODEsMi41ODNDNi41MDEsMTYuMjI5LDIuMzIxLDE3LjExLDAsMTUuNDM5YzAsMy42MjIsMy45MDEsMy42NjksNi4zMTUsMy45YzUuNzE4LTAuMjUsNy41MjUtMi44ODksOC4wNTctNC4wOTNjMC41MzIsMS4yMDUsMi4zNCwzLjg0Myw4LjA1OCw0LjA5M2MyLjQxNi0wLjIzMSw2LjMxNS0wLjI3OCw2LjMxNS0zLjlDMjYuNDIzLDE3LjExLDIyLjI0NCwxNi4yMjksMjEuNDU1LDEzLjAyNXoiLz48L2c+PGcgaWQ9ImV5ZTEiPjxlbGxpcHNlIHJ5PSIzLjUiIHJ4PSIyLjUiIGlkPSJzdmdfMyIgY3k9IjE1NC41IiBjeD0iMTczLjUiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlPSIjY2EyODk3IiBmaWxsPSIjY2EyODk3Ij48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSdyeCcgZHVyPSc2cycgYmVnaW49JzBzJyB2YWx1ZXM9JzIuNTsgMy41OyA0LjU7IDY7IDQuNTsgMy41OyAyLjUnIHJlcGVhdENvdW50PSdpbmRlZmluaXRlJyAvPiAgICAgICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSdyeScgZHVyPSc2cycgYmVnaW49JzBzJyB2YWx1ZXM9JzIuNTsgMy41OyA0LjU7IDY7IDQuNTsgMy41OyAyLjUnIHJlcGVhdENvdW50PSdpbmRlZmluaXRlJyAvPjwvZWxsaXBzZT48L2c+PGcgaWQ9ImV5ZTIiPjxlbGxpcHNlIHJ5PSIzLjUiIHJ4PSIzIiBpZD0ic3ZnXzQiIGN5PSIxNjkuNSIgY3g9IjIwOCIgc3Ryb2tlLXdpZHRoPSIzIiBmaWxsPSIjY2EyODk3IiBzdHJva2U9IiNjYTI4OTciPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9J3J4JyBkdXI9JzZzJyBiZWdpbj0nMHMnIHZhbHVlcz0nMi41OyAzLjU7IDQuNTsgNjsgNC41OyAzLjU7IDIuNScgcmVwZWF0Q291bnQ9J2luZGVmaW5pdGUnIC8+ICAgICAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9J3J5JyBkdXI9JzZzJyBiZWdpbj0nMHMnIHZhbHVlcz0nMi41OyAzLjU7IDQuNTsgNjsgNC41OyAzLjU7IDIuNScgcmVwZWF0Q291bnQ9J2luZGVmaW5pdGUnIC8+PC9lbGxpcHNlPjwvZz48ZyBjbGFzcz0iZXllbGFzaCI+PHBhdGggZD0iTSAxNjQgMTMwIFEgMTU0IDEyNSAxNjkgMTExIiBzdHJva2U9IiMyMTE4ODUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0idHJhbnNwYXJlbnQiLz48cGF0aCBkPSJNIDE3MSAxMjcgUSAxNjEgMTIyIDE3NiAxMDgiIHN0cm9rZT0iIzIxMTg4NSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJ0cmFuc3BhcmVudCIvPjxwYXRoIGQ9Ik0gMTc5IDEyNSBRIDE2OSAxMjAgMTg0IDEwNiIgc3Ryb2tlPSIjMjhmNzAyIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9InRyYW5zcGFyZW50Ii8+PHBhdGggZD0iTSAxODYgMTI2IFEgMTc2IDEyMSAxOTEgMTA3IiBzdHJva2U9IiMyMTE4ODUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0idHJhbnNwYXJlbnQiLz48cGF0aCBkPSJNIDE5NCAxMjcgUSAxODQgMTIyIDE5OSAxMDgiIHN0cm9rZT0iIzIxMTg4NSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJ0cmFuc3BhcmVudCIvPjxwYXRoIGQ9Ik0gMTk2IDE0MiBRIDE4NiAxMzcgMjAxIDEyMyIgc3Ryb2tlPSIjMjExODg1IiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9InRyYW5zcGFyZW50Ii8+PHBhdGggZD0iTSAyMDMgMTQwIFEgMTkzIDEzNSAyMDggMTIxIiBzdHJva2U9IiMyMTE4ODUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0idHJhbnNwYXJlbnQiLz48cGF0aCBkPSJNIDIxMSAxMzkgUSAyMDEgMTM0IDIxNiAxMjAiIHN0cm9rZT0iIzI4ZjcwMiIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJ0cmFuc3BhcmVudCIvPjxwYXRoIGQ9Ik0gMjE4IDE0MSBRIDIwOCAxMzYgMjIzIDEyMiIgc3Ryb2tlPSIjMjExODg1IiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9InRyYW5zcGFyZW50Ii8+PHBhdGggZD0iTSAyMjYgMTQzIFEgMjE2IDEzOCAyMzEgMTI0IiBzdHJva2U9IiMyMTE4ODUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0idHJhbnNwYXJlbnQiLz48L2c+PGcgY2xhc3M9ImJvdyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTgwLDIzNSkgc2NhbGUoMC4xMCAwLjEwKSI+PHBhdGggZmlsbD0iI2ZiN2RjYiIgZD0iTTQ3Ni41MzIsMTM1LjM5NmMtMTIuNTg0LTcuNzk2LTI5LTcuMzU2LTQ2LjI0OCwxLjIyOGwtMTE3Ljg2OCw1OS44OGMtMTAuMDQ4LTkuNy0yMy43MjgtMTQuNDUyLTM4LjgxNi0xNC40NTJoLTUwLjE1NmMtMTUuMjA0LDAtMjguOTkyLDQuODI4LTM5LjA2NCwxNC42NTJMNjYuMSwxMzcuMjU2Yy0xNy4yMzItOC41OC0zMy44MzYtOS4zMzYtNDYuNDEyLTEuNTQ0QzcuMSwxNDMuNTA4LDAsMTU4LjEsMCwxNzcuMzY4djE0MS4xMDRjMCwxOS4yNjgsNy4xLDM0LjE4LDE5LjY4LDQxLjk2YzUuOTcyLDMuNzA4LDEyLjkwNCw1LjU1NiwyMC4yOCw1LjU1NmM4LjE2NCwwLDE3LjA0LTIuMjU2LDI2LjA5Mi02Ljc2NGwxMTguMzEyLTU4LjE0YzEwLjA3Miw5LjgyNCwyMy44OCwxNi41ODgsMzkuMDgsMTYuNTg4SDI3My42YzE1LjA4NCwwLDI4Ljc4LTYuNjkyLDM4LjgyLTE2LjM5NmwxMTcuODg0LDU4LjI3NmM5LjA2OCw0LjUxMiwxNy45LDYuNTk2LDI2LjA2NCw2LjU5NmM3LjM4OCwwLDE0LjE5Mi0xLjkyOCwyMC4xNjQtNS42MzZDNDg5LjEwOCwzNTIuNzIsNDk2LDMzNy43NDQsNDk2LDMxOC40NzZWMTc3LjM2OEM0OTYsMTU4LjEsNDg5LjEwOCwxNDMuMTkyLDQ3Ni41MzIsMTM1LjM5NnoiLz48YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIGF0dHJpYnV0ZVR5cGU9IlhNTCIgdHlwZT0icm90YXRlIiBmcm9tPSIwIDIzNSAyNDUiIHRvPSIzNjAgMjM1IDI0NSIgYmVnaW49IjBzIiBkdXI9IjJzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYWRkaXRpdmU9InN1bSIgLz48L2c+PGcgY2xhc3M9Im11c3RhY2hlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNDAsMTk1KSBzY2FsZSgxLjUwIDEuNTApIj48cGF0aCBmaWxsPSIjY2ZkZmEyIiBkPSJNMjEuNDU1LDEzLjAyNWMtMC42MDQtMy4wNjUtNS44NjEtNC44ODEtNy4wODMtMi41ODNjLTEuMjItMi4yOTktNi40NzctMC40ODMtNy4wODEsMi41ODNDNi41MDEsMTYuMjI5LDIuMzIxLDE3LjExLDAsMTUuNDM5YzAsMy42MjIsMy45MDEsMy42NjksNi4zMTUsMy45YzUuNzE4LTAuMjUsNy41MjUtMi44ODksOC4wNTctNC4wOTNjMC41MzIsMS4yMDUsMi4zNCwzLjg0Myw4LjA1OCw0LjA5M2MyLjQxNi0wLjIzMSw2LjMxNS0wLjI3OCw2LjMxNS0zLjlDMjYuNDIzLDE3LjExLDIyLjI0NCwxNi4yMjksMjEuNDU1LDEzLjAyNXoiLz48L2c+PGcgaWQ9ImV5ZTEiPjxlbGxpcHNlIHJ5PSIzLjUiIHJ4PSIyLjUiIGlkPSJzdmdfMyIgY3k9IjE1NC41IiBjeD0iMTczLjUiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlPSIjY2EyODk3IiBmaWxsPSIjY2EyODk3Ij48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSdyeCcgZHVyPSc2cycgYmVnaW49JzBzJyB2YWx1ZXM9JzIuNTsgMy41OyA0LjU7IDY7IDQuNTsgMy41OyAyLjUnIHJlcGVhdENvdW50PSdpbmRlZmluaXRlJyAvPiAgICAgICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSdyeScgZHVyPSc2cycgYmVnaW49JzBzJyB2YWx1ZXM9JzIuNTsgMy41OyA0LjU7IDY7IDQuNTsgMy41OyAyLjUnIHJlcGVhdENvdW50PSdpbmRlZmluaXRlJyAvPjwvZWxsaXBzZT48L2c+PGcgaWQ9ImV5ZTIiPjxlbGxpcHNlIHJ5PSIzLjUiIHJ4PSIzIiBpZD0ic3ZnXzQiIGN5PSIxNjkuNSIgY3g9IjIwOCIgc3Ryb2tlLXdpZHRoPSIzIiBmaWxsPSIjY2EyODk3IiBzdHJva2U9IiNjYTI4OTciPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9J3J4JyBkdXI9JzZzJyBiZWdpbj0nMHMnIHZhbHVlcz0nMi41OyAzLjU7IDQuNTsgNjsgNC41OyAzLjU7IDIuNScgcmVwZWF0Q291bnQ9J2luZGVmaW5pdGUnIC8+ICAgICAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9J3J5JyBkdXI9JzZzJyBiZWdpbj0nMHMnIHZhbHVlcz0nMi41OyAzLjU7IDQuNTsgNjsgNC41OyAzLjU7IDIuNScgcmVwZWF0Q291bnQ9J2luZGVmaW5pdGUnIC8+PC9lbGxpcHNlPjwvZz48ZyBjbGFzcz0iZXllbGFzaCI+PHBhdGggZD0iTSAxNjQgMTMwIFEgMTU0IDEyNSAxNjkgMTExIiBzdHJva2U9IiMyMTE4ODUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0idHJhbnNwYXJlbnQiLz48cGF0aCBkPSJNIDE3MSAxMjcgUSAxNjEgMTIyIDE3NiAxMDgiIHN0cm9rZT0iIzIxMTg4NSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJ0cmFuc3BhcmVudCIvPjxwYXRoIGQ9Ik0gMTc5IDEyNSBRIDE2OSAxMjAgMTg0IDEwNiIgc3Ryb2tlPSIjMjhmNzAyIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9InRyYW5zcGFyZW50Ii8+PHBhdGggZD0iTSAxODYgMTI2IFEgMTc2IDEyMSAxOTEgMTA3IiBzdHJva2U9IiMyMTE4ODUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0idHJhbnNwYXJlbnQiLz48cGF0aCBkPSJNIDE5NCAxMjcgUSAxODQgMTIyIDE5OSAxMDgiIHN0cm9rZT0iIzIxMTg4NSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJ0cmFuc3BhcmVudCIvPjxwYXRoIGQ9Ik0gMTk2IDE0MiBRIDE4NiAxMzcgMjAxIDEyMyIgc3Ryb2tlPSIjMjExODg1IiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9InRyYW5zcGFyZW50Ii8+PHBhdGggZD0iTSAyMDMgMTQwIFEgMTkzIDEzNSAyMDggMTIxIiBzdHJva2U9IiMyMTE4ODUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0idHJhbnNwYXJlbnQiLz48cGF0aCBkPSJNIDIxMSAxMzkgUSAyMDEgMTM0IDIxNiAxMjAiIHN0cm9rZT0iIzI4ZjcwMiIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJ0cmFuc3BhcmVudCIvPjxwYXRoIGQ9Ik0gMjE4IDE0MSBRIDIwOCAxMzYgMjIzIDEyMiIgc3Ryb2tlPSIjMjExODg1IiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9InRyYW5zcGFyZW50Ii8+PHBhdGggZD0iTSAyMjYgMTQzIFEgMjE2IDEzOCAyMzEgMTI0IiBzdHJva2U9IiMyMTE4ODUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0idHJhbnNwYXJlbnQiLz48L2c+PC9zdmc+";
    const tankSrc = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjcwIiBoZWlnaHQ9IjI3MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMjcwIiBoZWlnaHQ9IjI3MCIgc3Ryb2tlPSJibGFjayIgZmlsbD0iIzhGQjlFQiIgc3Ryb2tlLXdpZHRoPSI1Ii8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTYwIC02MikiPjxnPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgZHVyPSIxNTAwcyIgZmlsbD0iZnJlZXplIiB0eXBlPSJ0cmFuc2xhdGUiIGFkZGl0aXZlPSJzdW0iIHZhbHVlcz0iOTEgMTQ5OzE1NyA1OTsyMjMgMjI1OzMzIDEzNTs5OSA0NTsxNjUgMjExOzIzMSAxMjE7NDEgMzE7MTA3IDE5NzsxNzMgMTA3OzIzOSAxNzs0OSAxODM7MTE1IDkzOzE4MSAzOzI0NyAxNjk7NTcgNzk7MTIzIDI0NTsxODkgMTU1OzI1NSA2NTs2NSAyMzE7MTMxIDE0MTsxOTcgNTE7NyAyMTc7NzMgMTI3OzEzOSAzNzsyMDUgMjAzOzE1IDExMzs4MSAyMzsxNDcgMTg5OzIxMyA5OTsyMyA5Ozg5IDE3NTsxNTUgODU7MjIxIDI1MTszMSAxNjE7OTcgNzE7MTYzIDIzNzsyMjkgMTQ3OzM5IDU3OzEwNSAyMjM7MTcxIDEzMzsyMzcgNDM7NDcgMjA5OzExMyAxMTk7MTc5IDI5OzI0NSAxOTU7NTUgMTA1OzEyMSAxNTsxODcgMTgxOzI1MyA5MTs2MyAxOzEyOSAxNjc7MTk1IDc3OzUgMjQzOzcxIDE1MzsxMzcgNjM7MjAzIDIyOTsxMyAxMzk7NzkgNDk7MTQ1IDIxNTsyMTEgMTI1OzIxIDM1Ozg3IDIwMTsxNTMgMTExOzIxOSAyMTsyOSAxODc7OTUgOTc7MTYxIDc7MjI3IDE3MzszNyA4MzsxMDMgMjQ5OzE2OSAxNTk7MjM1IDY5OzQ1IDIzNTsxMTEgMTQ1OzE3NyA1NTsyNDMgMjIxOzUzIDEzMTsxMTkgNDE7MTg1IDIwNzsyNTEgMTE3OzYxIDI3OzEyNyAxOTM7MTkzIDEwMzszIDEzOzY5IDE3OTsxMzUgODk7MjAxIDI1NTsxMSAxNjU7NzcgNzU7MTQzIDI0MTsyMDkgMTUxOzE5IDYxOzg1IDIyNzsxNTEgMTM3OzIxNyA0NzsyNyAyMTM7OTMgMTIzOzE1OSAzMzsyMjUgMTk5OzM1IDEwOTsiLz48YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InNjYWxlIiBhZGRpdGl2ZT0ic3VtIiB2YWx1ZXM9IjAuMyAwLjMiLz48ZyBpZD0iZXllMSI+PGVsbGlwc2Ugc3Ryb2tlLXdpZHRoPSIzIiByeT0iMjkuNSIgcng9IjI5LjUiIGlkPSJzdmdfMSIgY3k9IjE1NC41IiBjeD0iMTgxLjUiIHN0cm9rZT0iIzAwMCIgZmlsbD0iI2ZmZiIvPjxlbGxpcHNlIHJ5PSIzLjUiIHJ4PSIyLjUiIGlkPSJzdmdfMyIgY3k9IjE1NC41IiBjeD0iMTczLjUiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlPSIjMDAwIiBmaWxsPSIjMDAwMDAwIi8+PC9nPjxnIGlkPSJoZWFkIj48ZWxsaXBzZSBmaWxsPSIjZDViYjZkIiBzdHJva2Utd2lkdGg9IjMiIGN4PSIyMDQuNSIgY3k9IjIxMS44MDA2NSIgaWQ9InN2Z181IiByeD0iNTUiIHJ5PSI1MS44MDA2NSIgc3Ryb2tlPSIjMDAwIi8+PC9nPjxnIGlkPSJleWUyIj48ZWxsaXBzZSBzdHJva2Utd2lkdGg9IjMiIHJ5PSIyOS41IiByeD0iMjkuNSIgaWQ9InN2Z18yIiBjeT0iMTY4LjUiIGN4PSIyMDkuNSIgc3Ryb2tlPSIjMDAwIiBmaWxsPSIjZmZmIi8+PGVsbGlwc2Ugcnk9IjMuNSIgcng9IjMiIGlkPSJzdmdfNCIgY3k9IjE2OS41IiBjeD0iMjA4IiBzdHJva2Utd2lkdGg9IjMiIGZpbGw9IiMwMDAwMDAiIHN0cm9rZT0iIzAwMCIvPjwvZz48ZyBjbGFzcz0ibW91dGgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI4LDApIj48cGF0aCBkPSJNIDEzMCAyNDAgUSAxNjUgMjUwIDE5MiAyMzUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMyIgZmlsbD0idHJhbnNwYXJlbnQiLz48L2c+PC9nPjxnPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgZHVyPSIxNTAwcyIgZmlsbD0iZnJlZXplIiB0eXBlPSJ0cmFuc2xhdGUiIGFkZGl0aXZlPSJzdW0iIHZhbHVlcz0iMjE2IDkxOzEyOCAxMTE7NDAgMTMxOzIwOCAxNTE7MTIwIDE3MTszMiAxOTE7MjAwIDIxMTsxMTIgMjMxOzI0IDI1MTsxOTIgMTU7MTA0IDM1OzE2IDU1OzE4NCA3NTs5NiA5NTs4IDExNTsxNzYgMTM1Ozg4IDE1NTswIDE3NTsxNjggMTk1OzgwIDIxNTsyNDggMjM1OzE2MCAyNTU7NzIgMTk7MjQwIDM5OzE1MiA1OTs2NCA3OTsyMzIgOTk7MTQ0IDExOTs1NiAxMzk7MjI0IDE1OTsxMzYgMTc5OzQ4IDE5OTsyMTYgMjE5OzEyOCAyMzk7NDAgMzsyMDggMjM7MTIwIDQzOzMyIDYzOzIwMCA4MzsxMTIgMTAzOzI0IDEyMzsxOTIgMTQzOzEwNCAxNjM7MTYgMTgzOzE4NCAyMDM7OTYgMjIzOzggMjQzOzE3NiA3Ozg4IDI3OzAgNDc7MTY4IDY3OzgwIDg3OzI0OCAxMDc7MTYwIDEyNzs3MiAxNDc7MjQwIDE2NzsxNTIgMTg3OzY0IDIwNzsyMzIgMjI3OzE0NCAyNDc7NTYgMTE7MjI0IDMxOzEzNiA1MTs0OCA3MTsyMTYgOTE7MTI4IDExMTs0MCAxMzE7MjA4IDE1MTsxMjAgMTcxOzMyIDE5MTsyMDAgMjExOzExMiAyMzE7MjQgMjUxOzE5MiAxNTsxMDQgMzU7MTYgNTU7MTg0IDc1Ozk2IDk1OzggMTE1OzE3NiAxMzU7ODggMTU1OzAgMTc1OzE2OCAxOTU7ODAgMjE1OzI0OCAyMzU7MTYwIDI1NTs3MiAxOTsyNDAgMzk7MTUyIDU5OzY0IDc5OzIzMiA5OTsxNDQgMTE5OzU2IDEzOTsyMjQgMTU5OzEzNiAxNzk7NDggMTk5OzIxNiAyMTk7MTI4IDIzOTs0MCAzOzIwOCAyMzsxMjAgNDM7Ii8+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJzY2FsZSIgYWRkaXRpdmU9InN1bSIgdmFsdWVzPSIwLjMgMC4zIi8+PGcgaWQ9ImV5ZTEiPjxlbGxpcHNlIHN0cm9rZS13aWR0aD0iMyIgcnk9IjI5LjUiIHJ4PSIyOS41IiBpZD0ic3ZnXzEiIGN5PSIxNTQuNSIgY3g9IjE4MS41IiBzdHJva2U9IiMwMDAiIGZpbGw9IiNmZmYiLz48ZWxsaXBzZSByeT0iMy41IiByeD0iMi41IiBpZD0ic3ZnXzMiIGN5PSIxNTQuNSIgY3g9IjE3My41IiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZT0iIzAwMCIgZmlsbD0iIzAwMDAwMCIvPjwvZz48ZyBpZD0iaGVhZCI+PGVsbGlwc2UgZmlsbD0iI2Q1NjI0ZiIgc3Ryb2tlLXdpZHRoPSIzIiBjeD0iMjA0LjUiIGN5PSIyMTEuODAwNjUiIGlkPSJzdmdfNSIgcng9IjgyIiByeT0iNTEuODAwNjUiIHN0cm9rZT0iIzAwMCIvPjwvZz48ZyBpZD0iZXllMiI+PGVsbGlwc2Ugc3Ryb2tlLXdpZHRoPSIzIiByeT0iMjkuNSIgcng9IjI5LjUiIGlkPSJzdmdfMiIgY3k9IjE2OC41IiBjeD0iMjA5LjUiIHN0cm9rZT0iIzAwMCIgZmlsbD0iI2ZmZiIvPjxlbGxpcHNlIHJ5PSIzLjUiIHJ4PSIzIiBpZD0ic3ZnXzQiIGN5PSIxNjkuNSIgY3g9IjIwOCIgc3Ryb2tlLXdpZHRoPSIzIiBmaWxsPSIjMDAwMDAwIiBzdHJva2U9IiMwMDAiLz48L2c+PGcgY2xhc3M9Im1vdXRoIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2LDApIj48cGF0aCBkPSJNIDEzMCAyNDAgUSAxNjUgMjUwIDE5MiAyMzUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMyIgZmlsbD0idHJhbnNwYXJlbnQiLz48L2c+PC9nPjxnPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgZHVyPSIxNTAwcyIgZmlsbD0iZnJlZXplIiB0eXBlPSJ0cmFuc2xhdGUiIGFkZGl0aXZlPSJzdW0iIHZhbHVlcz0iMjIwIDEyMTsxNjAgMTg1OzEwMCAyNDk7NDAgNTc7MjM2IDEyMTsxNzYgMTg1OzExNiAyNDk7NTYgNTc7MjUyIDEyMTsxOTIgMTg1OzEzMiAyNDk7NzIgNTc7MTIgMTIxOzIwOCAxODU7MTQ4IDI0OTs4OCA1NzsyOCAxMjE7MjI0IDE4NTsxNjQgMjQ5OzEwNCA1Nzs0NCAxMjE7MjQwIDE4NTsxODAgMjQ5OzEyMCA1Nzs2MCAxMjE7MCAxODU7MTk2IDI0OTsxMzYgNTc7NzYgMTIxOzE2IDE4NTsyMTIgMjQ5OzE1MiA1Nzs5MiAxMjE7MzIgMTg1OzIyOCAyNDk7MTY4IDU3OzEwOCAxMjE7NDggMTg1OzI0NCAyNDk7MTg0IDU3OzEyNCAxMjE7NjQgMTg1OzQgMjQ5OzIwMCA1NzsxNDAgMTIxOzgwIDE4NTsyMCAyNDk7MjE2IDU3OzE1NiAxMjE7OTYgMTg1OzM2IDI0OTsyMzIgNTc7MTcyIDEyMTsxMTIgMTg1OzUyIDI0OTsyNDggNTc7MTg4IDEyMTsxMjggMTg1OzY4IDI0OTs4IDU3OzIwNCAxMjE7MTQ0IDE4NTs4NCAyNDk7MjQgNTc7MjIwIDEyMTsxNjAgMTg1OzEwMCAyNDk7NDAgNTc7MjM2IDEyMTsxNzYgMTg1OzExNiAyNDk7NTYgNTc7MjUyIDEyMTsxOTIgMTg1OzEzMiAyNDk7NzIgNTc7MTIgMTIxOzIwOCAxODU7MTQ4IDI0OTs4OCA1NzsyOCAxMjE7MjI0IDE4NTsxNjQgMjQ5OzEwNCA1Nzs0NCAxMjE7MjQwIDE4NTsxODAgMjQ5OzEyMCA1Nzs2MCAxMjE7MCAxODU7MTk2IDI0OTsxMzYgNTc7NzYgMTIxOzE2IDE4NTsyMTIgMjQ5OzE1MiA1Nzs5MiAxMjE7MzIgMTg1OzIyOCAyNDk7MTY4IDU3OzEwOCAxMjE7Ii8+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJzY2FsZSIgYWRkaXRpdmU9InN1bSIgdmFsdWVzPSIwLjMgMC4zIi8+PGcgaWQ9ImV5ZTEiPjxlbGxpcHNlIHN0cm9rZS13aWR0aD0iMyIgcnk9IjI5LjUiIHJ4PSIyOS41IiBpZD0ic3ZnXzEiIGN5PSIxNTQuNSIgY3g9IjE4MS41IiBzdHJva2U9IiMwMDAiIGZpbGw9IiNmZmYiLz48ZWxsaXBzZSByeT0iMy41IiByeD0iMi41IiBpZD0ic3ZnXzMiIGN5PSIxNTQuNSIgY3g9IjE3My41IiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZT0iIzAwMCIgZmlsbD0iIzAwMDAwMCIvPjwvZz48ZyBpZD0iaGVhZCI+PGVsbGlwc2UgZmlsbD0iIzdlNjIzYSIgc3Ryb2tlLXdpZHRoPSIzIiBjeD0iMjA0LjUiIGN5PSIyMTEuODAwNjUiIGlkPSJzdmdfNSIgcng9IjQ5IiByeT0iNTEuODAwNjUiIHN0cm9rZT0iIzAwMCIvPjwvZz48ZyBpZD0iZXllMiI+PGVsbGlwc2Ugc3Ryb2tlLXdpZHRoPSIzIiByeT0iMjkuNSIgcng9IjI5LjUiIGlkPSJzdmdfMiIgY3k9IjE2OC41IiBjeD0iMjA5LjUiIHN0cm9rZT0iIzAwMCIgZmlsbD0iI2ZmZiIvPjxlbGxpcHNlIHJ5PSIzLjUiIHJ4PSIzIiBpZD0ic3ZnXzQiIGN5PSIxNjkuNSIgY3g9IjIwOCIgc3Ryb2tlLXdpZHRoPSIzIiBmaWxsPSIjMDAwMDAwIiBzdHJva2U9IiMwMDAiLz48L2c+PGcgY2xhc3M9Im1vdXRoIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMywwKSI+PHBhdGggZD0iTSAxMzAgMjQwIFEgMTY1IDI1MCAxODAgMjM1IiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjMiIGZpbGw9InRyYW5zcGFyZW50Ii8+PC9nPjwvZz48Zz48YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIGR1cj0iMTUwMHMiIGZpbGw9ImZyZWV6ZSIgdHlwZT0idHJhbnNsYXRlIiBhZGRpdGl2ZT0ic3VtIiB2YWx1ZXM9Ijg4IDI0MTsyMSAxOTA7MjEwIDEzOTsxNDMgODg7NzYgMzc7OSAyNDI7MTk4IDE5MTsxMzEgMTQwOzY0IDg5OzI1MyAzODsxODYgMjQzOzExOSAxOTI7NTIgMTQxOzI0MSA5MDsxNzQgMzk7MTA3IDI0NDs0MCAxOTM7MjI5IDE0MjsxNjIgOTE7OTUgNDA7MjggMjQ1OzIxNyAxOTQ7MTUwIDE0Mzs4MyA5MjsxNiA0MTsyMDUgMjQ2OzEzOCAxOTU7NzEgMTQ0OzQgOTM7MTkzIDQyOzEyNiAyNDc7NTkgMTk2OzI0OCAxNDU7MTgxIDk0OzExNCA0Mzs0NyAyNDg7MjM2IDE5NzsxNjkgMTQ2OzEwMiA5NTszNSA0NDsyMjQgMjQ5OzE1NyAxOTg7OTAgMTQ3OzIzIDk2OzIxMiA0NTsxNDUgMjUwOzc4IDE5OTsxMSAxNDg7MjAwIDk3OzEzMyA0Njs2NiAyNTE7MjU1IDIwMDsxODggMTQ5OzEyMSA5ODs1NCA0NzsyNDMgMjUyOzE3NiAyMDE7MTA5IDE1MDs0MiA5OTsyMzEgNDg7MTY0IDI1Mzs5NyAyMDI7MzAgMTUxOzIxOSAxMDA7MTUyIDQ5Ozg1IDI1NDsxOCAyMDM7MjA3IDE1MjsxNDAgMTAxOzczIDUwOzYgMjU1OzE5NSAyMDQ7MTI4IDE1Mzs2MSAxMDI7MjUwIDUxOzE4MyAwOzExNiAyMDU7NDkgMTU0OzIzOCAxMDM7MTcxIDUyOzEwNCAxOzM3IDIwNjsyMjYgMTU1OzE1OSAxMDQ7OTIgNTM7MjUgMjsyMTQgMjA3OzE0NyAxNTY7ODAgMTA1OzEzIDU0OzIwMiAzOzEzNSAyMDg7NjggMTU3OzEgMTA2OzE5MCA1NTsxMjMgNDs1NiAyMDk7MjQ1IDE1ODsxNzggMTA3OzExMSA1Njs0NCA1OyIvPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0ic2NhbGUiIGFkZGl0aXZlPSJzdW0iIHZhbHVlcz0iMC4zIDAuMyIvPjxnIGlkPSJleWUxIj48ZWxsaXBzZSBzdHJva2Utd2lkdGg9IjMiIHJ5PSIyOS41IiByeD0iMjkuNSIgaWQ9InN2Z18xIiBjeT0iMTU0LjUiIGN4PSIxODEuNSIgc3Ryb2tlPSIjMDAwIiBmaWxsPSIjZmZmIi8+PGVsbGlwc2Ugcnk9IjMuNSIgcng9IjIuNSIgaWQ9InN2Z18zIiBjeT0iMTU0LjUiIGN4PSIxNzMuNSIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2U9IiMwMDAiIGZpbGw9IiMwMDAwMDAiLz48L2c+PGcgaWQ9ImhlYWQiPjxlbGxpcHNlIGZpbGw9IiM0OTdlZTYiIHN0cm9rZS13aWR0aD0iMyIgY3g9IjIwNC41IiBjeT0iMjExLjgwMDY1IiBpZD0ic3ZnXzUiIHJ4PSI0MiIgcnk9IjUxLjgwMDY1IiBzdHJva2U9IiMwMDAiLz48L2c+PGcgaWQ9ImV5ZTIiPjxlbGxpcHNlIHN0cm9rZS13aWR0aD0iMyIgcnk9IjI5LjUiIHJ4PSIyOS41IiBpZD0ic3ZnXzIiIGN5PSIxNjguNSIgY3g9IjIwOS41IiBzdHJva2U9IiMwMDAiIGZpbGw9IiNmZmYiLz48ZWxsaXBzZSByeT0iMy41IiByeD0iMyIgaWQ9InN2Z180IiBjeT0iMTY5LjUiIGN4PSIyMDgiIHN0cm9rZS13aWR0aD0iMyIgZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSIjMDAwIi8+PC9nPjxnIGNsYXNzPSJtb3V0aCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzksMCkiPjxwYXRoIGQ9Ik0gMTMwIDI0MCBRIDE2NSAyNTAgMTg1IDIzNSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIzIiBmaWxsPSJ0cmFuc3BhcmVudCIvPjwvZz48L2c+PC9nPjwvc3ZnPg==";
    return (
        <div style={{ fontSize: 18, width: 820, margin: "auto" }}>
            <h3 style={{ fontSize: "2em", fontWeight: "bold" }}>What's a Loogie Tank?</h3>
            <div style={{ marginBottom: 50 }}>
                <b>Short Answer &mdash; An NFT in motion</b>
            </div>
            <div style={{ marginBottom: 50 }}>
                NFTs are tokens linked to some data. Usually, this data is on IPFS to support immutability.
                The Loogie ecosystem is collection of NFTs on Optimistim where the data is fully on-chain.<br />
                This lets us be <div class="css-rainbow-text">creative</div>! Each NFT is unique with different shapes, colors and accessories.
            <div style={{ textAlign: "left", marginLeft: 50, marginBottom: 50 }}>
                    <ul>
                        <li>
                            <b> Loogies &mdash;</b> NFTs where the image is an SVG lives in the smart contract.<br />
                            You can mint some at <a href="https://www.fancyloogies.com/yourLoogies">fancyloogies.com/yourLoogies</a>
                            <img src={loogieSrc} height="100" width="100" />
                        </li>
                        <li>
                            <b> Fancy Loogies &mdash;</b> NFTs showing the power of composability on blockchain.<br />
                        Fancy up your Loogie here: <a href="https://www.fancyloogies.com/yourFancyLoogies">fancyloogies.com/yourFancyLoogies</a>
                            <img src={fancyLoogieSrc} height="100" width="100" />
                        </li>
                        <li>
                            <b> Loogie Tanks &mdash;</b> Make your loogies swim!<br />
                        Mint a tank here, transfer your (fancy) loogies to the tank and see them swim.&nbsp;&nbsp;
                        <img src={tankSrc} height="100" width="100" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
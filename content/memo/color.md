---
title: "僕がよく使ってる色たち"
date: 2022-04-12T20:00:28+09:00
draft: false
---

````text
Black: #13141C
BrightBlack: #4F5766
Blue: #96CCE7
BrightBlue: #B0CBE7
Cyan: #96E7E7
BrightCyan: #B0E7E7
Green: #B0E7CB
BrightGreen: #CBE8CB
Purple: #CECEFF
BrightPurple: #CBCBE8
Red: #FF9D9D
BrightRed: #F5BBBB
Yellow: #E7E7B0
BrightYellow: #E8E8CB
Orange: #E7BA95
BrightOrange: #E7D3B0
````

Slack
````text
#13141C,#2C3849,#96CCE7,#FFFFFF,#4F5766,#FFFFFF,#B0E7CB,#FF9D9D,#13141C,#FFFFFF
````

Windows Terminal
````json
{
  "background": "#13141C",
  "black": "#13141C",
  "blue": "#96CCE7",
  "brightBlack": "#4F5766",
  "brightBlue": "#B0CBE7",
  "brightCyan": "#B0E7E7",
  "brightGreen": "#CBE8CB",
  "brightPurple": "#CBCBE8",
  "brightRed": "#F5BBBB",
  "brightWhite": "#FFFFFF",
  "brightYellow": "#E8E8CB",
  "cursorColor": "#AAD1E9",
  "cyan": "#96E7E7",
  "foreground": "#FFFFFF",
  "green": "#B0E7CB",
  "name": "NCAT",
  "purple": "#CECEFF",
  "red": "#FF9D9D",
  "selectionBackground": "#BAE1F4",
  "white": "#FFFFFF",
  "yellow": "#E7E7B0"
}
````
negligible.ncat.omp.json(oh-my-posh)
````json
{
  "$schema": "https://raw.githubusercontent.com/JanDeDobbeleer/oh-my-posh/main/themes/schema.json",
  "blocks": [
    {
      "type": "prompt",
      "alignment": "left",
      "segments": [
        {
          "type": "os",
          "style": "powerline",
          "foreground": "#96CCE7",
          "properties": {
            "prefix": "",
            "postfix": ""
          }
        },
        {
          "type": "path",
          "style": "plain",
          "foreground": "#96CCE7",
          "properties": {
            "style": "full"
          }
        },
        {
          "type": "git",
          "style": "plain",
          "foreground": "#FF9D9D",
          "properties": {
            "prefix": ":: ",
            "fetch_status": true,
            "template": "{{ .HEAD }}{{ .BranchStatus }}{{ if .Staging.Changed }} \uF046 {{ .Staging.String }}{{ end }}{{ if and (.Working.Changed) (.Staging.Changed) }} |{{ end }}{{ if .Working.Changed }} \uF044 {{ .Working.String }}{{ end }}"
          }
        }
      ]
    },
    {
      "type": "prompt",
      "alignment": "right",
      "segments": [
        {
          "type": "root",
          "style": "plain",
          "foreground": "#FF9D9D",
          "properties": {
            "prefix": "| ",
            "root_icon": "root"
          }
        },
        {
          "type": "dart",
          "style": "powerline",
          "foreground": "#96CCE7",
          "properties": {
            "prefix": "| \uE798 "
          }
        },
        {
          "type": "node",
          "style": "powerline",
          "foreground": "#B0E7CB",
          "properties": {
            "prefix": "| \uE718 "
          }
        },
        {
          "type": "python",
          "style": "plain",
          "foreground": "#96CCE7",
          "properties": {
            "prefix": "| \uE235 ",
            "display_mode": "context",
            "fetch_virtual_env": true,
            "template": "{{ .Venv }}"
          }
        },
        {
          "type": "battery",
          "style": "powerline",
          "invert_powerline": true,
          "foreground_templates": [
            "{{if eq \"Charging\" .State.String}}#4caf50{{end}}",
            "{{if eq \"Discharging\" .State.String}}#40c4ff{{end}}",
            "{{if eq \"Full\" .State.String}}#ff0000{{end}}"
          ],
          "properties": {
            "charging_icon": " ",
            "charged_icon": "\uf00d ",
            "prefix": "| ",
            "postfix": "  "
          }
        },
        {
          "type": "time",
          "style": "plain",
          "foreground": "#CBE8CB",
          "properties": {
            "prefix": "| "
          }
        }
      ]
    },
    {
      "type": "prompt",
      "alignment": "left",
      "newline": true,
      "segments": [
        {
          "type": "exit",
          "style": "powerline",
          "foreground": "#CBE8CB",
          "foreground_templates": ["{{ if gt .Code 0 }}red{{ end }}"],
          "properties": {
            "always_enabled": true,
            "template": "\u279c",
            "prefix": ""
          }
        }
      ]
    }
  ]
}
````
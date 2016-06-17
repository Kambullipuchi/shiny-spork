var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = require("./default-webpack.dev.config.js")(webpack, HtmlWebpackPlugin, ExtractTextPlugin);

config.entry.head = "./source/headscript.ts";
config.entry.styles = "./source/vss.scss";
config.entry.app = ["expose?$!expose?jQuery!jquery", "bootstrap-sass", "angular", "./source/index.ts"];
config.devServer.port = 3000;

module.exports = config;
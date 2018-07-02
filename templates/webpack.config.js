/*
 * Copyright (C) 2018 Red Hat, Inc. and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */

const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './src/<%= params.pluginSourcePath %>',
    devtool: 'source-map',
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'ts-loader',
                    }
                ],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist'])
    ],
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        filename: '<%= params.pluginDistPath %>',
        <% if (params.isFrontend) { %>
        libraryTarget: "var",
        library: "<%= params.frontendModuleName %>",
        <%} %>        
        path: path.resolve(__dirname, 'dist')
    },
    externals: {
		"@wiptheia/plugin": "theia",
		"@theia/plugin": "theia"
	}
};

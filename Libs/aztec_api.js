({
	/**
	 * TitaNets Aztec Code Lib
	 * Converts a binary string into an array of binary values.
	 * @param {string} binaryString - The input binary string to convert.
	 * @returns {Array<number>} - The array of binary values (0 or 1).
	 */
	binaryStringToArray: function (binaryString, notify) {
		let binaryArray = [];

		// Ensure binaryString is a string
		if (typeof binaryString === 'string' && binaryString.length > 0) {
			// Iterate over each character in the binary string
			for (let i = 0; i < binaryString.length; i++) {
				if(notify !== undefined && i % 15 === 0) { 
					notify.blink("blue", "short"); 
				}
				
				let char = binaryString[i]; // Directly access character

				// Convert character to number and add to the array
				if (char === '0') {
					binaryArray.push(0);
				} else if (char === '1') {
					binaryArray.push(1);
				} else {
					print('Error: Invalid character in binary string:', char);
					return []; // Return empty array if invalid character is found
				}
			}
		} else {
			print('Error: Input must be a non-empty string.');
		}

		return binaryArray;
	},

	convertToBinary: function (text) {
		let binaryString = '';

		// Ensure text is a string
		if (typeof text === 'string' && text.length > 0) {
			for (let i = 0; i < text.length; i++) {
				let charCode = text.charCodeAt(i);
				let binary = '';

				// Handle charCode
				if (charCode < 0 || charCode > 255) {
					print('Error: Character code out of range:', charCode);
					continue; // Skip this character
				}

				// Convert char code to binary string
				for (let bit = 7; bit >= 0; bit--) {
					// Ensure charCode and bit are numbers
					let shift = charCode >>> bit; // Use unsigned right shift to avoid negative results
					let bitValue = shift & 1;
					// Convert bitValue to string manually
					binary = (bitValue === 1 ? '1' : '0') + binary; // Prepend bitValue
				}

				// Ensure binary is exactly 8 bits long
				if (binary.length === 8) {
					binaryString += binary;
				} else {
					print('Error: Binary string is not 8 bits long:', binary);
					return "";
				}
			}
		} else {
			print('Input must be a non-empty string');
			return "";
		}
		return binaryString;
	},

	drawAztecCode: function (topLeftX, topLeftY, aztecPattern, widget, notify) {
		// Define grid properties
		let gridSize = 15;      // Number of pixels (squares) in each row and column
		let pixelSize = 4;      // Size of each pixel (4x4 square)
		//let topLeftX = 10;      // X-coordinate of the top-left corner of the grid
		//let topLeftY = 0;      // Y-coordinate of the top-left corner of the grid

		if(notify !== undefined) { notify.blink("blue", "short"); }
			
		// Draw the Aztec code
		for (let row = 0; row < gridSize; row++) {
			for (let col = 0; col < gridSize; col++) {
				if (aztecPattern[row * gridSize + col] === 1) {
					widget.addBox(topLeftX + col * pixelSize, topLeftY + row * pixelSize, pixelSize, pixelSize);
				}
			}
		}
		if(notify !== undefined) { notify.blink("blue", "short"); }

		// Show the widget
		widget.show();

		if(notify !== undefined) { notify.blink("blue", "short"); }
			
		let demo_seconds = 30;
		let i = 1;
		while (widget.isOpen() && i <= demo_seconds) {
			if(notify !== undefined) { notify.blink("magenta", "short"); }
			delay(500);
		}

		// Close the widget if it's still open
		if (widget.isOpen()) {
			widget.close();
		}
	}
})
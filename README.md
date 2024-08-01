

# Loan Calculator

A web-based loan calculator that helps users calculate their monthly payments, total payments, and total interest for a given loan amount, interest rate, and loan term.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Example](#example)
- [Contributing](#contributing)
- [License](#license)

## Introduction
The Loan Calculator is a simple and user-friendly web application that allows users to input loan details and calculate important loan metrics. This tool can be useful for anyone looking to understand their loan repayment schedule and overall loan cost.

## Features
- Input fields for loan amount, annual interest rate, and loan term.
- Real-time calculations for monthly payment, total payment, and total interest.
- User-friendly interface with clear and organized output.

## Technologies Used
- **HTML**: For the structure of the form and output display.
- **CSS**: For styling the form and output sections.
- **JavaScript**: For handling calculations and updating the output dynamically.

## Setup Instructions
1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/loan-calculator.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd loan-calculator
   ```
3. **Open `index.html` in your web browser:**
   ```bash
   open index.html
   ```

## Usage
1. Open the loan calculator in your web browser.
2. Enter the loan amount in the "Loan Amount" field.
3. Enter the annual interest rate in the "Annual Interest Rate" field.
4. Enter the loan term in the "Loan Term" field.
5. Click the "Calculate" button to see the results.
6. The monthly payment, total payment, and total interest will be displayed.

## Example
Here’s an example calculation for a loan amount of ₹1,00,000, an annual interest rate of 8%, and a loan term of 20 months:

- **Loan Amount:** ₹1,00,000
- **Annual Interest Rate:** 8%
- **Loan Term:** 20 months

### Calculation Steps:
1. **Convert Annual Interest Rate to Monthly Interest Rate:**
   \[
   \text{Monthly interest rate} = \frac{8\%}{12} = 0.6667\% \approx 0.006667
   \]
2. **Convert Loan Term to Number of Payments:**
   \[
   \text{Number of payments} = 20 \text{ months}
   \]
3. **Calculate Monthly Payment (EMI):**
   \[
   EMI = \frac{100000 \times 0.006667 \times (1 + 0.006667)^{20}}{(1 + 0.006667)^{20} - 1} \approx ₹5,499.93
   \]
4. **Calculate Total Payment:**
   \[
   \text{Total payment} = ₹5,499.93 \times 20 = ₹1,09,998.60
   \]
5. **Calculate Total Interest Paid:**
   \[
   \text{Total interest paid} = ₹1,09,998.60 - ₹1,00,000 = ₹9,998.60
   \]

### Results:
- **Monthly Payment (EMI):** ₹5,499.93
- **Total Payment:** ₹1,09,998.60
- **Total Interest Paid:** ₹9,998.60

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or new features.



import random
import string

def generate_admin_codes(num_codes, code_length=12):
    """Generate a list of random admin access codes including year and month.

    Args:
        num_codes (int): The number of codes to generate.
        code_length (int): The total length of each code (including year and month).

    Returns:
        list: A list of unique admin access codes.
    """
    codes = set()
    year = "2024"
    month = "11"

    # Calculate the number of random characters needed
    random_length = code_length - len(year) - len(month)

    while len(codes) < num_codes:
        # Generate random characters
        random_part = ''.join(random.choices(string.ascii_letters + string.digits, k=random_length))
        # Create the final code
        code = f"{random_part}{year}{month}"
        codes.add(code)

    return list(codes)

def main():
    # Configuration for code generation
    num_codes = int(input("Enter the number of admin access codes to generate: "))

    # Generate codes
    admin_codes = generate_admin_codes(num_codes)

    # Print the generated codes
    print("\nGenerated Admin Access Codes:")
    for code in admin_codes:
        print(code)

if __name__ == "__main__":
    main()


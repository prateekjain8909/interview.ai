import os

def print_folder_hierarchy(folder_path):
  """Prints the folder hierarchy of the specified folder.

  Args:
    folder_path: The path to the folder to print the hierarchy of.
  """

  for root, directories, files in os.walk(folder_path):
    if "node_modules" in root or "node_modules" in files:
      continue
    level = root.replace(folder_path, '').count(os.sep)
    indent = ' ' * 4 * level
    print('{}{}/'.format(indent, os.path.basename(root)))
    for f in files:
      print('{}{}'.format(indent, f))

if __name__ == '__main__':
  folder_path = './'
  print_folder_hierarchy(folder_path)



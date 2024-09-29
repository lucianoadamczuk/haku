export interface IFormcontact {
  // person
  nameAndSurnameLabel: string;
  nameAndSurnameError: string;
  //company
  companyNameLabel: string;
  companyNameError: string;
  // social media
  socialMediaLabel: string;
  socialMediaError: string;
  // reason
  reasonLabel: string;
  options: string[];
  // comment
  commentLabel: string;
  commentError: string;
  // others
  button: string;
  messageTemplate: string;
}

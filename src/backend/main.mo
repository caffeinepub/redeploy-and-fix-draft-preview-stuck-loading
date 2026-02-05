import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Text "mo:core/Text";
import Time "mo:core/Time";
import Order "mo:core/Order";
import List "mo:core/List";
import Nat "mo:core/Nat";
import Map "mo:core/Map";
import MixinStorage "blob-storage/Mixin";
import Storage "blob-storage/Storage";

actor {
  include MixinStorage();

  type About = {
    name : Text;
    summary : Text;
    profileImage : ?Storage.ExternalBlob;
  };

  type Experience = {
    id : Nat;
    company : Text;
    title : Text;
    period : Text;
    description : Text;
  };

  type Project = {
    id : Nat;
    title : Text;
    description : Text;
    screenshots : ?[Storage.ExternalBlob];
    roleDetails : Text;
  };

  type ContactSubmission = {
    name : Text;
    email : Text;
    message : Text;
    timestamp : Time.Time;
  };

  type SocialLink = {
    platform : Text;
    url : Text;
  };

  type Portfolio = {
    about : About;
    experiences : [Experience];
    projects : [Project];
    contactEmail : Text;
    socialLinks : [SocialLink];
  };

  module Experience {
    public func compareByCompany(a : Experience, b : Experience) : Order.Order {
      Text.compare(b.company, a.company);
    };
  };

  module Project {
    public func compareById(a : Project, b : Project) : Order.Order {
      Nat.compare(a.id, b.id);
    };
  };

  var nextExperienceId = 1;
  var nextProjectId = 1;

  let experiences = List.fromArray<Experience>([
    {
      id = 1;
      company = "YSecIT";
      title = "Game Designer";
      period = "2022–2025";
      description = "Created comprehensive game design documents, led VR feature development, and collaborated cross-teams.";
    },
    {
      id = 2;
      company = "Liquid Nitro Games";
      title = "Game Designer / Level Designer";
      period = "Contract (6 Months)";
      description = "Designed engaging levels for mobile games with 10M+ downloads and optimized player progression.";
    },
    {
      id = 3;
      company = "Beyondoo Games";
      title = "Game Developer";
      period = "2021 (2 Months)";
      description = "Developed Unity gameplay systems, UI components, and created technical design documentation.";
    },
    {
      id = 4;
      company = "Freelancer";
      title = "Content Writer & Web Developer";
      period = "2020 (3 Months)";
      description = "Authored game narratives and built responsive web applications for RPG titles.";
    },
  ]);

  let projects = List.empty<Project>();
  let contactSubmissions = Map.empty<Time.Time, ContactSubmission>();

  var about : About = {
    name = "Vikalp Singh";
    summary = "Game Designer specializing in immersive storytelling and interactive experiences.";
    profileImage = null;
  };

  var contactEmail : Text = "vikalp@email.com";

  var socialLinks : [SocialLink] = [
    {
      platform = "LinkedIn";
      url = "https://linkedin.com/in/vikalpsingh";
    },
    {
      platform = "Portfolio";
      url = "https://vikalp.games";
    },
    {
      platform = "Twitter";
      url = "https://twitter.com/vikalpgames";
    },
  ];

  public query ({ caller }) func getPortfolioContent() : async Portfolio {
    let projectsArray = projects.toArray().sort(Project.compareById);

    {
      about;
      experiences = experiences.toArray();
      projects = projectsArray;
      contactEmail;
      socialLinks;
    };
  };

  public shared ({ caller }) func addProject(title : Text, description : Text, roleDetails : Text, screenshots : ?[Storage.ExternalBlob]) : async Project {
    let project : Project = {
      id = nextProjectId;
      title;
      description;
      screenshots;
      roleDetails;
    };
    projects.add(project);
    nextProjectId += 1;
    project;
  };

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, message : Text) : async () {
    let submission : ContactSubmission = {
      name;
      email;
      message;
      timestamp = Time.now();
    };
    contactSubmissions.add(Time.now(), submission);
  };

  public query ({ caller }) func getContactSubmissions() : async [ContactSubmission] {
    contactSubmissions.values().toArray();
  };

  public shared ({ caller }) func uploadProfileImage(externalBlob : Storage.ExternalBlob) : async () {
    about := {
      name = about.name;
      summary = about.summary;
      profileImage = ?externalBlob;
    };
  };
};

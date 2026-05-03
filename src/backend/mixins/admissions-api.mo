import Types "../types/admissions";
import AdmissionsLib "../lib/admissions";
import List "mo:core/List";

mixin (submissions : List.List<Types.Submission>) {
  public shared func submitAdmission(
    name : Text,
    age : Nat,
    contactNumber : Text,
    email : Text,
    courseSelection : Text,
  ) : async Types.SubmitResult {
    if (name == "") return #err("Name is required");
    if (email == "") return #err("Email is required");
    if (courseSelection == "") return #err("Course selection is required");
    let nextId = submissions.size();
    let entry = AdmissionsLib.submit(submissions, nextId, name, age, contactNumber, email, courseSelection);
    submissions.add(entry);
    #ok(entry.id);
  };

  public query func getAdmissions() : async [Types.Submission] {
    AdmissionsLib.all(submissions);
  };
};

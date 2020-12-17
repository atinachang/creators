import ProfileSummary from './ProfileSummary';

const ProfileList = ({profiles}) => {

	return (
		<div>
			{
				profiles && profiles.map((profile) => {
					return (
						<ProfileSummary profile={profile} key={profile.id}/>
					)
				})
			}
		</div>
	)
}

export default ProfileList
